import constants from "./../constants";
const { initialState, types } = constants;

function testChangeReducer(state = initialState.shownTestId, action){
  switch (action.type) {
    case types.CHANGE_SHOWN_TEST:
      return action.testId;
    default:
      return state;
  }
}

export default testChangeReducer;