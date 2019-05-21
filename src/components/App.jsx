import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import TestBody from './TestBody';
import Header from './Header';
import UserInfo from "./UserInfo";
import TestList from "./TestList";
import FactsList from "./FactsList";
import { connect } from 'react-redux';


function App({ user, testList, shownTestId }){

  console.log(testList);
  console.log(!!shownTestId);
  
  
  let shownTestDetails = "";
  if(!!shownTestId){
    shownTestDetails = <FactsList factList={testList[shownTestId].facts} />;
  }

  console.log(shownTestDetails);
  
  return (
    <div>
      <Header />
      <br/>
      <UserInfo name={user.name} currentLevel={user.level}/>
      {shownTestDetails}
      <TestList testList={testList}/>
      <TestBody user={user}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    shownTestId: state.shownTestId,
    testList: state.testsById
  };
};

export default connect(mapStateToProps)(App);
