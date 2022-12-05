import { CharacterSelectionType } from '../models/game.enums';
import { Game } from '../models/game.interface';
import { isEmptyTable, isRandomGame, mapResultFromState, replaceGameAttibuteToApiValue } from './utils';

describe('Utils specs', () => {
  const mockGameState: Game = {
    firstName: 'Player0',
    secondName: 'Player1',
    firstScore: 2,
    secondScore: 5,
  } as Game;
  it('isEmptyTable', () => {
    const result = isEmptyTable([]);
    expect(result).toBe(true);
  });

  it('isPlayersDefinded', () => {
    const result = mapResultFromState(mockGameState);
    expect(result).toBeTruthy()
  });

  it('replaceGameAttibuteToApiValue', () => {
    const result = replaceGameAttibuteToApiValue('TEST STRING');
    expect(result).toBe('test_string')
  });

  it('isRandomGame', () => {
    const result = isRandomGame(CharacterSelectionType.random);
    expect(result).toBeTruthy()
  });

  it('isRandomGame false', () => {
    const result = isRandomGame(CharacterSelectionType.manually);
    expect(result).toBe(false);
  });
});
