import reducer from "./search";
import * as actionTypes from "../constants/actionTypes";
import searchResults from "./searchResults.json";

describe("search reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      value: "",
      loading: false,
      results: [],
      error: null
    });
  }),
    it("should return loading and value", () => {
      const value = "cat";
      expect(
        reducer(undefined, {
          type: actionTypes.SEARCH_START,
          value
        })
      ).toEqual({
        value,
        loading: true,
        results: [],
        error: null
      });
    }),
    it("should return results", () => {
      const results = [{ id: 1, url: "1.png" }, { id: 2, url: "2.png" }];
      expect(
        reducer(
          {
            value: "cat",
            loading: true,
            results: [],
            error: null
          },
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
    }),
    it("should return an error", () => {
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
            error: errorMessage
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
