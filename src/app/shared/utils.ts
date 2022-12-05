import { CharacterSelectionType } from './models/game.enums';
import { Game } from './models/game.interface';

export const isEmptyTable = <T>(tab: T[]) => tab.length === 0;

export const isPlayersDefinded = (st: Game) =>
  st.firstName.length > 0 && st.secondName.length > 0;

export const mapResultFromState = (st: Game): string =>
  `${st.firstScore} - ${st.secondScore}`;

export const replaceGameAttibuteToApiValue = (s: string) =>
  s.replace(' ', '_').toLowerCase();

export const isRandomGame = (v: CharacterSelectionType) =>
  v === CharacterSelectionType.random;
