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
    
    it("Should increase the number of correct answers if answer is correct", () => {      
      const { factIndex, facts } = initialState.currentTest;
      let correctResult = facts[factIndex].result;
      let answerResult = facts[factIndex].term1 + facts[factIndex].term2;      
      currentTestReducer(initialState.currentTest, actions.saveAnswer(factIndex, answerResult)); //saving correct answer
      let newCorrectAnswers = initialState.currentTest.correctAnswers + 1;    
      expect(currentTestReducer(initialState.currentTest, actions.checkAnswer()).correctAnswers).toEqual(newCorrectAnswers);
    });
    
    it("Should NOT increase the number of correct answers if answer is wrong", () => {      
      const { factIndex, facts } = initialState.currentTest;
      let correctResult = facts[factIndex].result;
      let answerResult = facts[factIndex].term1 + facts[factIndex].term2;      
      currentTestReducer(initialState.currentTest, actions.saveAnswer(factIndex, answerResult + 10)); //saving incorrect answer
      let newCorrectAnswers = initialState.currentTest.correctAnswers;    
      expect(currentTestReducer(initialState.currentTest, actions.checkAnswer()).correctAnswers).toEqual(newCorrectAnswers);
    });

    
  });
});
