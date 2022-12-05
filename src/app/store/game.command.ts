import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CharacterSelectionType,
  CharacterType,
} from '../shared/models/game.enums';
import { GameAppState } from './app.state';
import { actionFetchInitData } from './game-data/game-data.actions';
import { DataI } from './game-data/game-data.interface';
import {
  actionRunGameRound,
  actionSetCharacterSelectionType,
  actionSetCharacterType,
  actionSetGameCharacterAttribute,
  actionSetPlayersName,
} from './game/game.actions';

@Injectable({
  providedIn: 'any',
})
export class GameCommand {
  constructor(private store: Store<GameAppState>) {}

  public fetchInitData() {
    this.store.dispatch(actionFetchInitData());
  }

  public setPlayersName(firstName: string, secondName: string) {
    this.store.dispatch(actionSetPlayersName({ firstName, secondName }));
  }

  public setCharacterType(characterType: CharacterType) {
    this.store.dispatch(actionSetCharacterType({ characterType }));
  }

  public setCharacterSelectionType(
    characterSelectionType: CharacterSelectionType
  ) {
    this.store.dispatch(
      actionSetCharacterSelectionType({ characterSelectionType })
    );
  }

  public setCharacterGameAttribute(characterGameAttibute: string) {
    this.store.dispatch(
      actionSetGameCharacterAttribute({ characterGameAttibute })
    );
  }

  public runGameRound(player1: DataI<any>, player2: DataI<any>) {
    this.store.dispatch(actionRunGameRound({ player1, player2 }));
  }
}
