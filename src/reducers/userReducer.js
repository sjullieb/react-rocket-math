import constants from "../constants";
const { initialState, types } = constants;

const userReducer = (state = initialState.user, action) => {
  let newState;

  switch (action.type) {
    case types.SAVE_USER_TEST:
    // 1. save testId to array
    // 2. change level
    
      const { testId } = action;
      const newTests = [...state.tests];
      newTests.push(testId);
      
      newState = Object.assign({}, state, {tests: newTests});
      console.log("Saving testId to user's test array");      
      console.log(newState);
      
      return newState;
    default:
      return state;
  }
};

export default userReducer;