import reducer from "./search";
import * as actionTypes from "../constants/actionTypes";
import deepFreeze from 'deep-freeze';

describe("search reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      value: "",
      loading: false,
      results: [],
      error: null
    });
  });
  it("should return loading and value", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.SEARCH_START,
      })
    ).toEqual({
      value: '',
      loading: true,
      results: [],
      error: null
    });
  });
  it("should handle `CHANGE_VALUE` action type", () => {
    const value = 'CAAAAT';
    const state = reducer(undefined, {type: actionTypes.CHANGE_VALUE, payload: value });
    expect(state.value).toEqual(value)
  });
  it("should handle `SEARCH_SUCCESS` action type", () => {
    const results = [{ id: 1, url: "1.png" }, { id: 2, url: "2.png" }];
    const state = {
      value: "cat",
      loading: true,
      results: [],
      error: null
    };
    deepFreeze(state);
    expect(
      reducer(
        state,
        {
          type: actionTypes.SEARCH_SUCCESS,
          payload: results
        }
      )
    ).toEqual({
      value: "cat",
      loading: false,
      results,
      error: null
    });
  });
  it("should handle `SEARCH_ERROR` action type", () => {
    const errorMessage = "no internet connection";
    expect(
      reducer(
        {
          value: "cat",
          loading: true,
          results: [],
          error: null
        },
        {
          type: actionTypes.SEARCH_ERROR,
          payload: errorMessage
        }
      )
    ).toEqual({
      value: "cat",
      loading: false,
      results: [],
      error: errorMessage
    });
  });
});
