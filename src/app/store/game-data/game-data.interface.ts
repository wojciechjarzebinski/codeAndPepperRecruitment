import {
  PersonI,
  PlanetI,
  StarshipI,
} from 'src/app/shared/models/characters.interface';

export interface GameData {
  peoples: DataI<PersonI>[];
  starships: DataI<StarshipI>[];
  planets: DataI<PlanetI>[];
}

export interface DataI<T> {
  uid: string;
  name: string;
  url: string;
  details: T | null;
}
