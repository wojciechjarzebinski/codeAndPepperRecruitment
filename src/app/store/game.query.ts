import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  CharacterSelectionType,
  CharacterType,
} from '../shared/models/game.enums';
import {
  CharacterDetails,
  Game,
  GameSettings,
} from '../shared/models/game.interface';
import { GameAppState } from './app.state';
import { DataI } from './game-data/game-data.interface';
import { selectPossibleCharacters } from './game-data/game-data.selector';
import {
  selectCharacterGameAttribute,
  selectCharacterSelectionType,
  selectCharacterType,
  selectCurrentCharacterPlayerFirst,
  selectCurrentCharacterPlayerSecond,
  selectFirstPlayerName,
  selectGameSettings,
  selectGameState,
  selectSecondPlayerName,
} from './game/game.selector';

@Injectable({
  providedIn: 'any',
})
export class GameQuery {
  constructor(private store: Store<GameAppState>) {}

  public getGameState(): Observable<Game> {
    return this.store.pipe(select(selectGameState()));
  }

  public getGameSettings(): Observable<GameSettings> {
    return this.store.pipe(select(selectGameSettings()));
  }

  public getFirstPlayerName(): Observable<string> {
    return this.store.pipe(select(selectFirstPlayerName()));
  }

  public getSecondPlayerName(): Observable<string> {
    return this.store.pipe(select(selectSecondPlayerName()));
  }
  public getCharacterSelectionType(): Observable<CharacterSelectionType> {
    return this.store.pipe(select(selectCharacterSelectionType()));
  }

  public getCharacterType(): Observable<CharacterType> {
    return this.store.pipe(select(selectCharacterType()));
  }

  public getCharacterGameAttribute(): Observable<string> {
    return this.store.pipe(select(selectCharacterGameAttribute()));
  }

  public getPossibleCharacters(): Observable<DataI<any>[]> {
    return this.store.pipe(select(selectPossibleCharacters()));
  }

  public getFirstPlayerCharacter(): Observable<CharacterDetails> {
    return this.store.pipe(select(selectCurrentCharacterPlayerFirst()));
  }

  public getSecondPlayerCharacter(): Observable<CharacterDetails> {
    return this.store.pipe(select(selectCurrentCharacterPlayerSecond()));
  }
}
