import constants from "../constants";
const { initialState, types } = constants;

const testSaveReducer = (state = initialState.testsById, action) => {
  let newTestsSlice;

  switch (action.type) {
    case types.SAVE_CURRENT_TEST:
    // 1. save new object to tests
    // 2. add testId to user's arrya of tests
    // 3. currentTest = null
      const { level, operator, correctAnswers, pass, timestamp, facts, testId, userId } = action;
      const newFactsArray = [...facts];
      let newTest = {
        id: testId,
        userId: userId,
        level: level,
        operator: operator,
        correctAnswers: correctAnswers,
        pass: pass,
        timestamp: timestamp,
        facts: newFactsArray
      };

      newTestsSlice = Object.assign({}, state.testsById, {[testId]: newTest});
      console.log("Saving test");      
      console.log(newTestsSlice);
      
      return newTestsSlice;
    default:
      return state;
  }
};

export default testSaveReducer;
