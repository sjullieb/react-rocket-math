import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const initializeState = () => ({
  type: types.INITIALIZE_STATE
});

export const saveAnswer = (factId, answer) => ({
  type: types.SAVE_ANSWER,
  factId,
  answer
});

export const checkAnswer = factId => ({
  type: types.CHECK_ANSWER,
  factId
});

export const updatePass = () => ({
  type: types.UPDATE_PASS
});

export const updateComplete = () => ({
  type: types.UPDATE_COMPLETE
});

export const nextFactIndex = () => ({
  type: types.NEXT_FACT_INDEX
});

export const completeTest = () => ({
  type: types.COMPLETE_TEST
});

export const saveCurrentTest = (
  testId,
  userId,
  level,
  operator,
  correctAnswers,
  pass,
  timestamp,
  facts
) => ({
  type: types.SAVE_CURRENT_TEST,
  testId: testId,
  userId: userId,
  level: level,
  operator: operator,
  correctAnswers: correctAnswers,
  pass: pass,
  timestamp: timestamp,
  facts: facts
});

export const saveUserTest = testId => ({
  type: types.SAVE_USER_TEST,
  testId: testId
});

export const updateUserLevel = () => ({
  type: types.UPDATE_USER_LEVEL
});

export const updateTimer = timeLeft => ({
  type: types.UPDATE_TIMER,
  timeLeft: timeLeft
});

export const stopTimer = () => ({
  type: types.STOP_TIMER
});

export const changeShownTest = testId => ({
  type: types.CHANGE_SHOWN_TEST,
  testId: testId
});

export const createNewTest = (level, operator, timer, facts) => ({
  type: types.CREATE_NEW_TEST,
  level: level,
  operator: operator,
  timer: timer,
  facts: facts
});

export const clearCurrentTest = () => ({});

// export const startTest = (level, operator, timeLeft) => {
//   console.log(getState());

//   return (dispatch, getState) => {
//     console.log(this);

//     const setId = level + operator;
//     const set = this.getState().masterSets[setId];
//     //const set = getSet(level + operator); // returns set from masterSets with id = level + operator
//     const factIds = set.facts;
//     //const facts = getFactsArray(factIds); // forms array of fact objects
//     const facts = factIds.map(id => {
//       Object.assign({}, this.getState().masterFacts[id], { answer: null });
//     });
//     console.log(facts);
//     dispatch(createNewTest(level, operator, timeLeft, facts));
//   };
// };

// function setSelection(selectedWidgetId) {
//   return (dispatch, getState) => {

//       const {widgets} = this.getState();
//       const coordinates = getSelectionCoordinates(widgets, selectedWidgetIds);

//       dispatch({
//           type: SET_SELECTION,
//           payload: {
//               widgets: selectedWidgets,
//               x: coordinates.x,
//               y: coordinates.y
//           }
//       });
// }
//------------------------

export const nextLyric = currentSongId => ({
  type: types.NEXT_LYRIC,
  currentSongId
});

export const restartSong = currentSongId => ({
  type: types.RESTART_SONG,
  currentSongId
});

export const changeSong = newSelectedSongId => ({
  type: types.CHANGE_SONG,
  newSelectedSongId
});

export function fetchSongId(title) {
  return function(dispatch) {
    const localSongId = v4();
    dispatch(requestSong(title, localSongId));
    title = title.replace(" ", "_");
    return fetch(
      "http://api.musixmatch.com/ws/1.1/track.search?&q_track=" +
        title +
        "&page_size=1&s_track_rating=desc&apikey=bade4746449dfc0af7242b9f3bfcc7b4"
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(function(json) {
        if (json.message.body.track_list.length > 0) {
          const musicMatchId = json.message.body.track_list[0].track.track_id;
          const artist = json.message.body.track_list[0].track.artist_name;
          const title = json.message.body.track_list[0].track.track_name;
          console.log(musicMatchId, artist, title);

          fetchLyrics(title, artist, musicMatchId, localSongId, dispatch);
        } else {
          console.log("We couldn't locate a song under that ID!");
        }
      });
  };
}

export function fetchLyrics(
  title,
  artist,
  musicMatchId,
  localSongId,
  dispatch
) {
  console.log(musicMatchId);
  return fetch(
    "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
      musicMatchId +
      "&apikey=bade4746449dfc0af7242b9f3bfcc7b4"
  )
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(function(json) {
      if (json.message.body.lyrics) {
        let lyrics = json.message.body.lyrics.lyrics_body;
        lyrics = lyrics.replace('"', "");
        const songArray = lyrics.split(/\n/g).filter(entry => entry != "");
        dispatch(receiveSong(title, artist, localSongId, songArray));
        dispatch(changeSong(localSongId));
      } else {
        console.log("We couldn't locate lyrics for this song!");
      }
    });
}

export const requestSong = (title, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  songId: localSongId
});

export const receiveSong = (title, artist, songId, songArray) => ({
  type: types.RECEIVE_SONG,
  songId,
  title,
  artist,
  songArray,
  receivedAt: Date.now()
});
