import * as actions from './index';
import * as types from '../constants/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

jest.mock('../Utilities', () => ({
  makeFetchGifsUrl: value => 'http://giphy-api.com/search/' + value
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should start searching', () => {
    const favorite = {
      type: 'gif',
      id: 'ZXlDOOsfV0a8U',
      slug: 'webewebewebe-ZXlDOOsfV0a8U'
    };
    const expectedAction = {
      type: types.TOGGLE_FAVS,
      favorite
    };
    expect(actions.toggleFavs(favorite)).toEqual(expectedAction);
  });

  describe('changeValue', () => {
    it('should returns expected action', () => {
      const value = 'Alex';
      expect(actions.changeValue(value)).toEqual({
        type: types.CHANGE_VALUE,
        payload: value
      });
    });
  });

  it('should create an action of start searching', () => {
    const expectedAction = {
      type: types.SEARCH_START,
      payload: 'cat'
    };
    expect(actions.search_start('cat')).toEqual(expectedAction);
  });

  it('should create an action of success searching', () => {
    const payload = { name: 'test', tutu: 'tata' };
    const expectedAction = {
      type: types.SEARCH_SUCCESS,
      payload
    };
    expect(actions.search_success(payload)).toEqual(expectedAction);
  });

  it('should create an action of error', () => {
    const error = '500, internal error';
    const expectedAction = {
      type: types.SEARCH_ERROR,
      payload: error
    };
    expect(actions.search_error(error)).toEqual(expectedAction);
  });

  /* ,
    it("should dispatch actions of search", () => {
      const expectedAction = {
        type: types.SEARCH_START,
        payload: "cat"
      };
      const dispatch = jest.fn();
      const store = mockStore({
        favorites: [],
        search: {
          loading: false,
          results: [],
          error: null
        }
      });
      store.dispatch(actions.getGifs("cat"));
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    }); */

  describe('getGifs thunk', () => {
    it('should dispatch actions of search', async () => {
      const searchValue = 'Alex';
      const gifsResults = {
        data: ['a', 'b', 'c']
      };

      const store = mockStore({});

      fetchMock.getOnce('http://giphy-api.com/search/' + searchValue, {
        body: gifsResults
      });

      await store.dispatch(actions.getGifs(searchValue));

      const expectedActions = [
        {
          type: types.SEARCH_START,
          payload: searchValue
        },
        {
          type: types.SEARCH_SUCCESS,
          payload: gifsResults.data
        }
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
    it('should dispatch an error action', async () => {
      const searchValue = 'Alex';

      const store = mockStore({});

      fetchMock.getOnce('http://giphy-api.com/search/' + searchValue, {
        status: 500,
        body: { error: true }
      });

      await store.dispatch(actions.getGifs(searchValue));

      const expectedActions = [
        {
          type: types.SEARCH_START,
          payload: searchValue
        },
        {
          type: types.SEARCH_ERROR,
          payload: { status: 500 }
        }
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
