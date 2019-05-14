import { combineReducers } from 'redux';
import songChangeReducer from './songChangeReducer';
import lyricChangeReducer from './lyricChangeReducer';
import currentSetReducer from './currentSetReducer';

const rootReducer = combineReducers({
  currentSongId: songChangeReducer,
  songsById: lyricChangeReducer,
  currentSet: currentSetReducer
});

export default rootReducer;
