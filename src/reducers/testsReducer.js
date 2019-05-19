import constants from "../constants";
const { initialState, types } = constants;

const testSaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_CURRENT_TEST:
      return state;
    default:
      return state;
  }
};

export default testSaveReducer;
