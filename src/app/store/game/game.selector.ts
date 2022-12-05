import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  CharacterSelectionType,
  CharacterType,
} from '../../shared/models/game.enums';
import {
  CharacterDetails,
  Game,
  GameSettings,
} from '../../shared/models/game.interface';
import { GameAppState, selectAppState } from '../app.state';

export const selectGameState: () => MemoizedSelector<GameAppState, Game> = () =>
  createSelector(selectAppState, (state) => state?.game);

export const selectFirstPlayerName: () => MemoizedSelector<
  GameAppState,
  string
> = () => createSelector(selectGameState(), (state: Game) => state?.firstName);

export const selectSecondPlayerName: () => MemoizedSelector<
  GameAppState,
  string
> = () => createSelector(selectGameState(), (state: Game) => state?.secondName);

export const selectGameSettings: () => MemoizedSelector<
  GameAppState,
  GameSettings
> = () =>
  createSelector(
    selectGameState(),
    ({
      characterSelectionType,
      characterType,
      characterGameAttibute,
    }: Game) => {
      return { characterSelectionType, characterType, characterGameAttibute };
    }
  );

export const selectCharacterType: () => MemoizedSelector<
  GameAppState,
  CharacterType
> = () =>
  createSelector(selectGameState(), (state: Game) => state?.characterType);

export const selectCharacterSelectionType: () => MemoizedSelector<
  GameAppState,
  CharacterSelectionType
> = () =>
  createSelector(
    selectGameState(),
    (state: Game) => state?.characterSelectionType
  );

export const selectCharacterGameAttribute: () => MemoizedSelector<
  GameAppState,
  string
> = () =>
  createSelector(
    selectGameState(),
    (state: Game) => state?.characterGameAttibute
  );

export const selectCurrentCharacterPlayerFirst: () => MemoizedSelector<
  GameAppState,
  CharacterDetails
> = () =>
  createSelector(
    selectGameState(),
    (state: Game) => state?.characterPlayerFirst
  );

export const selectCurrentCharacterPlayerSecond: () => MemoizedSelector<
  GameAppState,
  CharacterDetails
> = () =>
  createSelector(
    selectGameState(),
    (state: Game) => state?.characterPlayerSecond
  );
