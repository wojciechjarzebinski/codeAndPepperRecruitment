import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  PersonI,
  PlanetI,
  StarshipI,
} from '../../shared/models/characters.interface';
import { CharacterType } from '../../shared/models/game.enums';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { isEmptyTable } from '../../shared/utils/utils';
import { SetGameCharacterType } from '../game/game.action-type';
import { mapApiDataToState } from './data.adapter.utils';
import {
  FetchInitDataType,
  GetPeopleDataType,
  GetPlanetsDataType,
  GetStarshipDataType,
} from './game-data.action-type';
import {
  actionGetPeopleData,
  actionGetPlanetData,
  actionGetStarshipData,
  actionSetPeopleData,
  actionSetPlanetsData,
  actionSetStarshipsData,
} from './game-data.actions';
import { selectPeoplesData, selectPlanetsData } from './game-data.selector';

@Injectable()
export class DataEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<any>,
    private swapi: StarWarsApiService
  ) {}

  public getInitData$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Action>(FetchInitDataType),
        map(() => actionGetPeopleData())
      ) as any
  );

  public changeCharacterData$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<any>(SetGameCharacterType),
        map(({ characterType }) => {
          switch (characterType) {
            case CharacterType.planets:
              return actionGetPlanetData();
            case CharacterType.starships:
              return actionGetStarshipData();
            case CharacterType.peoples:
            default:
              return actionGetPeopleData();
          }
        })
      ) as any
  );

  public getPersonData$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Action>(GetPeopleDataType),
        withLatestFrom(this.store.select(selectPeoplesData())),
        filter((data) => !isEmptyTable(data)),
        switchMap(() => this.swapi.getPeoples()),
        map((data) =>
          actionSetPeopleData({
            peoples: mapApiDataToState<PersonI>(data.results),
          })
        )
      ) as any
  );

  public getPlanetData$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Action>(GetPlanetsDataType),
        withLatestFrom(this.store.select(selectPlanetsData())),
        filter((data) => !isEmptyTable(data)),
        switchMap(() => this.swapi.getPlanets()),
        map((data) =>
          actionSetPlanetsData({
            planets: mapApiDataToState<PlanetI>(data.results),
          })
        )
      ) as any
  );

  public getStarshipsData$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Action>(GetStarshipDataType),
        withLatestFrom(this.store.select(selectPlanetsData())),
        filter((data) => !isEmptyTable(data)),
        switchMap(() => this.swapi.getStarships()),
        map((data) =>
          actionSetStarshipsData({
            starships: mapApiDataToState<StarshipI>(data.results),
          })
        )
      ) as any
  );
}
