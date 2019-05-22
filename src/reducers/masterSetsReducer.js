import constants from "../constants";
const { initialState, types } = constants;

const masterSetsReducer = (state = initialState.masterSets, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default masterSetsReducer;
