import { createReducer, Action, on } from '@ngrx/store';
import {
  actionSetDataDetails,
  actionSetPeopleData,
  actionSetPlanetsData,
  actionSetStarshipsData,
} from './game-data.actions';
import { GameData } from './game-data.interface';

export const DATA_INITIAL_STATE: GameData = {
  peoples: [],
  planets: [],
  starships: [],
};

const reducer = createReducer(
  DATA_INITIAL_STATE,
  on(actionSetPeopleData, (state, { peoples }) => {
    return { ...state, peoples };
  }),
  on(actionSetStarshipsData, (state, { starships }) => {
    return { ...state, starships };
  }),
  on(actionSetPlanetsData, (state, { planets }) => {
    return { ...state, planets };
  }),
  on(actionSetDataDetails, (state, { data, characterType }) => {
    const newTable = state[characterType].map((el) => {
      return el.uid === data.uid ? data : el;
    });

    return { ...state, [characterType]: newTable };
  })
);

export function dataReducer(state: GameData, action: Action) {
  return reducer(state, action);
}
