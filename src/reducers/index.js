import { combineReducers } from 'redux';
import songChangeReducer from './songChangeReducer';
import lyricChangeReducer from './lyricChangeReducer';
import currentAttemptReducer from './currentAttemptReducer';

const rootReducer = combineReducers({
  currentSongId: songChangeReducer,
  songsById: lyricChangeReducer,
  currentAttempt: currentAttemptReducer
});

export default rootReducer;
