import { createAction, props } from '@ngrx/store';
import {
  PersonI,
  PlanetI,
  StarshipI,
} from 'src/app/shared/models/characters.interface';
import { CharacterType } from 'src/app/shared/models/game.enums';
import {
  FetchInitDataType,
  GetPeopleDataType,
  GetPlanetsDataType,
  GetStarshipDataType,
  SetDataDetailsType,
  SetPeopleDataType,
  SetPlanetsDataType,
  SetStarshipsDataType,
} from './game-data.action-type';
import { DataI } from './game-data.interface';

export const actionFetchInitData = createAction(FetchInitDataType);
export const actionGetPeopleData = createAction(GetPeopleDataType);
export const actionGetPlanetData = createAction(GetPlanetsDataType);
export const actionGetStarshipData = createAction(GetStarshipDataType);

export const actionSetPeopleData = createAction(
  SetPeopleDataType,
  props<{ peoples: DataI<PersonI>[] }>()
);
export const actionSetPlanetsData = createAction(
  SetPlanetsDataType,
  props<{ planets: DataI<PlanetI>[] }>()
);
export const actionSetStarshipsData = createAction(
  SetStarshipsDataType,
  props<{ starships: DataI<StarshipI>[] }>()
);
export const actionSetDataDetails = createAction(
  SetDataDetailsType,
  props<{ data: DataI<any>; characterType: CharacterType }>()
);
