import { CoreDataI } from '../../shared/services/api.interface';
import { DataI } from './game-data.interface';

export const mapApiDataToState = <T>(data: CoreDataI[]): DataI<T>[] => {
  return data.map((d) => {
    return {
      ...d,
      details: null,
    };
  });
};
