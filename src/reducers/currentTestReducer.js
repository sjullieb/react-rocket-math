import constants from "../constants";
const { initialState, types } = constants;

const currentTestReducer = (state = initialState.currentTest, action) => {
  let newFactsArray;
  let newCurrentTestSlice;
  switch (action.type) {
    case types.INITIALIZE_STATE:
      return state;

    case types.NEXT_FACT_INDEX:
      let nextFactIndex = state.factIndex + 1;
      newCurrentTestSlice = Object.assign({}, state, {factIndex: nextFactIndex});    
      return newCurrentTestSlice;

    case types.SAVE_ANSWER:
      newFactsArray = state.facts.slice();
      newFactsArray[action.factId].answer = action.answer;
      newCurrentTestSlice = Object.assign({}, state, {facts: newFactsArray});         
      return newCurrentTestSlice;

    case types.CHECK_ANSWER:
      if(state.facts[action.factId].answer == state.facts[action.factId].result){ 
                
        let newCorrectAnswers = state.correctAnswers + 1;
        newCurrentTestSlice = Object.assign({}, state, {correctAnswers: newCorrectAnswers});         
        console.log("Correct Answer");
        console.log(newCurrentTestSlice);                  
        return newCurrentTestSlice;
      } else {
        console.log("Wrong Answer");        
        return state;
      }

    case types.UPDATE_PASS:
      let pass = (state.correctAnswers == state.facts.length);
      newCurrentTestSlice = Object.assign({}, state, {pass: pass.toString()});     
      return newCurrentTestSlice;

    case types.UPDATE_COMPLETE:      
      newCurrentTestSlice = Object.assign({}, state, {complete: "true"});           
      return newCurrentTestSlice;
      
    case types.COMPLETE_TEST:
    // 1. save object to tests
    // 2. update completed property
    // 3. reset timer
    // 4. update pass poroperty

    //case types.UPDATE_TIMER:

    //case types.SET_TIMER:

    //   const newArrayPosition = state[action.currentSongId].arrayPosition + 1;
    //   newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
    //     arrayPosition: newArrayPosition
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.currentSongId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;

    // case types.RESTART_SONG:
    //   newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
    //     arrayPosition: 0
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.currentSongId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    // case types.REQUEST_SONG:
    //   newSongsByIdEntry = {
    //     isFetching: true,
    //     title: action.title,
    //     songId: action.songId
    //   };
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.songId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    // case types.RECEIVE_SONG:
    //   newSongsByIdEntry = Object.assign({}, state[action.songId], {
    //     isFetching: false,
    //     receivedAt: action.receivedAt,
    //     title: action.title,
    //     artist: action.artist,
    //     songArray: action.songArray,
    //     arrayPosition: 0,
    //     songId: action.songId
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.songId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    default:
      return state;
  }
};

export default currentTestReducer;
