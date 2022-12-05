import {
  CharacterSelectionType,
  CharacterType,
} from 'src/app/shared/models/game.enums';
import { PersonI, PlanetI, StarshipI } from './characters.interface';

export type CharacterDetails = PlanetI | PersonI | StarshipI | null;

export interface GameSettings {
  characterSelectionType: CharacterSelectionType;
  characterType: CharacterType;
  characterGameAttibute: string;
}

export interface Result {
  firstScore: number;
  secondScore: number;
}

export interface Game extends GameSettings, Result {
  firstName: string;
  secondName: string;
  characterPlayerFirst: CharacterDetails;
  characterPlayerSecond: CharacterDetails;
}
