import constants from "./../../src/constants";
import songChangeReducer from "./../../src/reducers/songChangeReducer";
import lyricChangeReducer from "./../../src/reducers/lyricChangeReducer";
import rootReducer from "./../../src/reducers/";
import currentAttemptReducer from "./../../src/reducers/currentAttemptReducer";
import { createStore } from "redux";
import * as actions from "./../../src/actions";

describe("Karaoke App", () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe("currentAttemptReducer", () => {
    it("Should update answer", () => {      
      expect(currentAttemptReducer(initialState.currentAttempt, actions.saveAnswer(0, 1)).equations[0].answer).toEqual(1);
    });

    it("Should accept and return state", () => {
      expect(currentAttemptReducer(initialState.currentAttempt, {type: null})).toEqual(initialState.currentAttempt);
    });

  });
});
