import { createReducer, Action, on } from '@ngrx/store';
import {
  CharacterSelectionType,
  CharacterType,
  GameCharacterAttributes,
} from '../../shared/models/game.enums';
import { Game } from '../../shared/models/game.interface';
import {
  actionSetCharacterPlayerFirst,
  actionSetCharacterPlayerSecond,
  actionSetCharacterSelectionType,
  actionSetCharacterType,
  actionSetGameCharacterAttribute,
  actionSetPlayersName,
  actionWinFirstPlayer,
  actionWinSecondPlayer,
} from './game.actions';

export const GAME_INITIAL_STATE: Game = {
  firstName: '',
  firstScore: 0,
  secondName: '',
  secondScore: 0,
  characterSelectionType: CharacterSelectionType.random,
  characterType: CharacterType.peoples,
  characterGameAttibute: GameCharacterAttributes[CharacterType.peoples][0],
  characterPlayerFirst: null,
  characterPlayerSecond: null,
};

const reducer = createReducer(
  GAME_INITIAL_STATE,
  on(actionSetCharacterSelectionType, (state, { characterSelectionType }) => {
    return { ...state, characterSelectionType };
  }),
  on(actionSetCharacterType, (state, { characterType }) => {
    return { ...state, characterType };
  }),
  on(actionSetGameCharacterAttribute, (state, { characterGameAttibute }) => {
    return { ...state, characterGameAttibute };
  }),
  on(actionWinFirstPlayer, (state) => {
    const firstScore = state.firstScore + 1;
    return { ...state, firstScore };
  }),
  on(actionWinSecondPlayer, (state) => {
    const secondScore = state.secondScore + 1;
    return { ...state, secondScore };
  }),
  on(actionSetPlayersName, (state, { firstName, secondName }) => {
    return { ...state, firstName, secondName };
  }),
  on(actionSetCharacterPlayerFirst, (state, { data }) => {
    return { ...state, characterPlayerFirst: data };
  }),
  on(actionSetCharacterPlayerSecond, (state, { data }) => {
    return { ...state, characterPlayerSecond: data };
  })
);

export function gameReducer(state: Game, action: Action) {
  return reducer(state, action);
}
