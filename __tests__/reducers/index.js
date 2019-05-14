import constants from "./../../src/constants";
import songChangeReducer from "./../../src/reducers/songChangeReducer";
import lyricChangeReducer from "./../../src/reducers/lyricChangeReducer";
import rootReducer from "./../../src/reducers/";
import { createStore } from "redux";
import * as actions from "./../../src/actions";

describe("Karaoke App", () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);
});
