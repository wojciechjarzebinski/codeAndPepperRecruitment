import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { isNaN } from 'lodash';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/services/error.service';
import { StarWarsApiService } from 'src/app/shared/services/star-wars-api.service';
import { replaceGameAttibuteToApiValue } from 'src/app/shared/utils';
import { actionSetDataDetails } from '../game-data/game-data.actions';
import {
  CheckGameConditionType,
  GetDetailsAndCheckConditionType,
  RunGameRoundType,
} from './game.action-type';

import {
  actionCheckGameCondition,
  actionGetDetailsAndCheckGameCondition,
  actionRunGameRound,
  actionSetCharacterPlayerFirst,
  actionSetCharacterPlayerSecond,
  actionWinFirstPlayer,
  actionWinSecondPlayer,
} from './game.actions';
import {
  selectCharacterGameAttribute,
  selectCharacterType,
} from './game.selector';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<any>,
    private swapi: StarWarsApiService,
    private errorService: ErrorService
  ) {}

  //Catch action run game round from view
  public runGameRound$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<any>(RunGameRoundType),
        map(({ player1, player2 }) => {
          if (!player1?.details || !player2?.details) {
            return actionGetDetailsAndCheckGameCondition({ player1, player2 });
          }

          return actionCheckGameCondition({ player1, player2 });
        })
      ) as any
  );

  //Check game conditon and find winner
  public checkGameRoundWinner$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<any>(CheckGameConditionType),
        withLatestFrom(this.store.pipe(select(selectCharacterGameAttribute()))),
        map(([{ player1, player2 }, attribute]) => {
          const apiAttr = replaceGameAttibuteToApiValue(attribute);
          if (player1.details[apiAttr] > player2.details[apiAttr]) {
            return actionWinFirstPlayer();
          }
          return actionWinSecondPlayer();
        })
      ) as any,
    { dispatch: false }
  );

  public getDetailsAndCheck$: Observable<any> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<any>(GetDetailsAndCheckConditionType),
        switchMap(({ player1, player2 }) =>
          forkJoin([
            of(player1),
            of(player2),
            this.swapi.getCharacterDetails(player1.url),
            this.swapi.getCharacterDetails(player2.url),
          ])
        ),
        withLatestFrom(
          this.store.pipe(select(selectCharacterGameAttribute())),
          this.store.pipe(select(selectCharacterType()))
        ),
        switchMap(
          ([
            [player1, player2, player1Details, player2Details],
            attr,
            characterType,
          ]) => {
            const p1Details = (player1Details as any).result.properties;
            const p2Details = (player2Details as any).result.properties;
            const concatCharacter1 = { ...player1, details: p1Details };
            const concatCharacter2 = { ...player2, details: p2Details };

            let actions: any[] = [
              actionSetCharacterPlayerFirst({ data: p1Details }),
              actionSetCharacterPlayerSecond({ data: p2Details }),
              actionSetDataDetails({ data: concatCharacter1, characterType }),
              actionSetDataDetails({ data: concatCharacter2, characterType }),
            ];

            const apiAttr = replaceGameAttibuteToApiValue(attr);
            const player1Value = Number(concatCharacter1.details[apiAttr]);
            const player2Value = Number(concatCharacter2.details[apiAttr]);

            if (isNaN(player1Value) || isNaN(player2Value)) {
              this.errorService.logError('Bad data from server');
            } else if (player1Value === player2Value) {
              this.errorService.logError('Same Character Values');
            } else {
              const winnerAction =
                player1Value > player2Value
                  ? actionWinFirstPlayer()
                  : actionWinSecondPlayer();
              actions.push(winnerAction);
            }

            return actions;
          }
        )
      ) as any
  );
}
