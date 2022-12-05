import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Game } from '../shared/models/game.interface';
import { DataEffects } from './game-data/game-data.effects';
import { GameData } from './game-data/game-data.interface';
import { dataReducer } from './game-data/game-data.reducer';
import { GameEffects } from './game/game.effects';
import { gameReducer } from './game/game.reducer';

export const APP_FEATURE_KEY = 'c&pGame';

export const selectAppState =
  createFeatureSelector<GameAppState>(APP_FEATURE_KEY);

export const APP_REDUCERS: ActionReducerMap<any> = {
  game: gameReducer,
  data: dataReducer,
};

export const APP_EFFECTS: any[] = [GameEffects, DataEffects];

export interface GameAppState {
  game: Game;
  data: GameData;
}
