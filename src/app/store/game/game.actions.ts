import { createAction, props } from '@ngrx/store';
import {
  PersonI,
  PlanetI,
  StarshipI,
} from '../../shared/models/characters.interface';
import {
  CharacterSelectionType,
  CharacterType,
} from '../../shared/models/game.enums';
import { DataI } from '../game-data/game-data.interface';
import {
  CheckGameConditionType,
  GetDetailsAndCheckConditionType,
  RunGameRoundType,
  SetCharacterPlayerFirstType,
  SetCharacterPlayerSecondType,
  SetGameCharacterAttributeType,
  SetGameCharacterSelectionType,
  SetGameCharacterType,
  SetPlayersNameType,
  WinPlayerFirstType,
  WinPlayerSecondType,
} from './game.action-type';

export const actionSetPlayersName = createAction(
  SetPlayersNameType,
  props<{ firstName: string; secondName: string }>()
);

export const actionWinFirstPlayer = createAction(WinPlayerFirstType);
export const actionWinSecondPlayer = createAction(WinPlayerSecondType);

export const actionSetCharacterType = createAction(
  SetGameCharacterType,
  props<{ characterType: CharacterType }>()
);

export const actionSetCharacterSelectionType = createAction(
  SetGameCharacterSelectionType,
  props<{ characterSelectionType: CharacterSelectionType }>()
);

export const actionSetGameCharacterAttribute = createAction(
  SetGameCharacterAttributeType,
  props<{ characterGameAttibute: string }>()
);

export const actionRunGameRound = createAction(
  RunGameRoundType,
  props<{ player1: DataI<any>; player2: DataI<any> }>()
);

export const actionGetDetailsAndCheckGameCondition = createAction(
  GetDetailsAndCheckConditionType,
  props<{ player1: DataI<any>; player2: DataI<any> }>()
);

export const actionCheckGameCondition = createAction(
  CheckGameConditionType,
  props<{ player1: DataI<any>; player2: DataI<any> }>()
);

export const actionSetCharacterPlayerFirst = createAction(
  SetCharacterPlayerFirstType,
  props<{ data: PlanetI | PersonI | StarshipI }>()
);

export const actionSetCharacterPlayerSecond = createAction(
  SetCharacterPlayerSecondType,
  props<{ data: PlanetI | PersonI | StarshipI }>()
);
