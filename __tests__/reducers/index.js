import constants from "./../../src/constants";
import songChangeReducer from "./../../src/reducers/songChangeReducer";
import lyricChangeReducer from "./../../src/reducers/lyricChangeReducer";
import rootReducer from "./../../src/reducers/";
import currentSetReducer from "../../src/reducers/currentSetReducer";
import { createStore } from "redux";
import * as actions from "./../../src/actions";

describe("Rocket Math", () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe("currentSetReducer", () => {

    it("Should accept and return state", () => {
      expect(currentSetReducer(initialState.currentSet, {type: null})).toEqual(initialState.currentSet);
    });

    it("Should update answer", () => {      
      expect(currentSetReducer(initialState.currentSet, actions.saveAnswer(0, 1)).facts[0].answer).toEqual(1);
    });

  });
});
