import constants from "../constants";
const { initialState, types } = constants;

const masterFactsReducer = (state = initialState.masterFacts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default masterFactsReducer;
