import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  PersonI,
  PlanetI,
  StarshipI,
} from 'src/app/shared/models/characters.interface';
import { CharacterType } from 'src/app/shared/models/game.enums';
import { GameAppState, selectAppState } from '../app.state';
import { selectCharacterType } from '../game/game.selector';
import { DataI, GameData } from './game-data.interface';

export const selectData: () => MemoizedSelector<GameAppState, GameData> = () =>
  createSelector(selectAppState, (state) => state?.data);

export const selectPeoplesData: () => MemoizedSelector<
  GameAppState,
  DataI<PersonI>[]
> = () => createSelector(selectData(), (state: GameData) => state?.peoples);

export const selectStarshipsData: () => MemoizedSelector<
  GameAppState,
  DataI<StarshipI>[]
> = () => createSelector(selectData(), (state: GameData) => state?.starships);

export const selectPlanetsData: () => MemoizedSelector<
  GameAppState,
  DataI<PlanetI>[]
> = () => createSelector(selectData(), (state: GameData) => state?.planets);

export const selectPossibleCharacters: () => MemoizedSelector<
  GameAppState,
  DataI<any>[]
> = () =>
  createSelector(
    selectCharacterType(),
    selectData(),
    (type: CharacterType, state: GameData) => {
      switch (type) {
        case CharacterType.planets:
          return state?.planets;
        case CharacterType.starships:
          return state?.starships;
        case CharacterType.peoples:
        default:
          return state?.peoples;
      }
    }
  );
