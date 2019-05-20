import constants from "../constants";
const { initialState, types } = constants;

const timerReducer = (state = initialState.timer, action) => {
  let newState;

  switch (action.type) {
    case types.UPDATE_TIMER:
      newState = Object.assign({}, state, {timeLeft: action.timeLeft});
      return newState;

    case types.STOP_TIMER:
        newState = Object.assign({}, state, {timeLeft: 0});
        return newState;

    default:
        return state;      
  }
};

export default userReducer;