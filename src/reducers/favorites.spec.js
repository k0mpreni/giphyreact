import reducer from './favorites';
import favorites from './favGifs';
import * as types from '../constants/actionTypes';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  }),
  it('should return the favorites', () => {
    expect(reducer(undefined, {
      type: types.TOGGLE_FAVS,
      favorites
    }))
  })
});
