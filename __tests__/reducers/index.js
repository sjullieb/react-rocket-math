import constants from "./../../src/constants";
import songChangeReducer from "./../../src/reducers/songChangeReducer";
import lyricChangeReducer from "./../../src/reducers/lyricChangeReducer";
import rootReducer from "./../../src/reducers/";
import currentTestReducer from "../../src/reducers/currentTestReducer";
import { createStore } from "redux";
import * as actions from "./../../src/actions";

describe("Rocket Math", () => {
  const { initialState } = constants;
  const store = createStore(rootReducer, initialState);

  describe("currentTestReducer", () => {

    it("Should accept and return state", () => {
      expect(currentTestReducer(initialState.currentTest, {type: null})).toEqual(initialState.currentTest);
    });

    it("Should update answer", () => {      
      expect(currentTestReducer(initialState.currentTest, actions.saveAnswer(0, 1)).facts[0].answer).toEqual(1);
    });

    it("Should increase index of current fact", () => {      
      let newIndex = initialState.currentTest.factIndex+1;     
      expect(currentTestReducer(initialState.currentTest, actions.nextFactIndex()).factIndex).toEqual(newIndex);
    });
    
  });
});
