import { isEmptyTable } from './utils';

describe('Utils specs', () => {
  it('isEmptyTable', () => {
    const result = isEmptyTable([]);
    expect(result).toBe(true);
  });
});
