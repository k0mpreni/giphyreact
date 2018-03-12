import * as actions from "./index";
import * as types from "../constants/actionTypes";

describe("actions", () => {
  it("should start searching", () => {
    const favorite = {
      type: "gif",
      id: "ZXlDOOsfV0a8U",
      slug: "webewebewebe-ZXlDOOsfV0a8U"
    };
    const expectedAction = {
      type: types.TOGGLE_FAVS,
      favorite
    };
    expect(actions.toggleFavs(favorite)).toEqual(expectedAction);
  }),
    it("should create an action of start searching", () => {
      const value = "cat";
      const expectedAction = {
        type: types.SEARCH_START,
        value
      };
      expect(actions.search_start(value)).toEqual(expectedAction);
    }),
    it("should create an action of success searching", () => {
      const payload = { name: "test", tutu: "tata" };
      const expectedAction = {
        type: types.SEARCH_SUCCESS,
        payload
      };
      expect(actions.search_success(payload)).toEqual(expectedAction);
    }),
    it("should create an action of error", () => {
      const error = "500, internal error";
      const expectedAction = {
        type: types.SEARCH_ERROR,
        error
      };
      expect(actions.search_error(error)).toEqual(expectedAction);
    });
});
