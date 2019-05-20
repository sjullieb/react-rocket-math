import { combineReducers } from 'redux';
import songChangeReducer from './songChangeReducer';
import lyricChangeReducer from './lyricChangeReducer';
import currentTestReducer from './currentTestReducer';
import testsReducer from './testsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  currentSongId: songChangeReducer,
  songsById: lyricChangeReducer,
  currentTest: currentTestReducer,
  user: userReducer,
  testsById: testsReducer
});

export default rootReducer;
