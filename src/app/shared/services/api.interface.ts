import { PersonI, StarshipI } from '../models/characters.interface';

interface CoreCharacterApiI {
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface PersonApiI extends CoreCharacterApiI {
  properties: PersonI;
}

export interface PlanetApiI extends CoreCharacterApiI {
  properties: PersonI;
}

export interface StarshipApiI extends CoreCharacterApiI {
  properties: StarshipI;
}

export interface CoreDataI {
  uid: string;
  name: string;
  url: string;
}
