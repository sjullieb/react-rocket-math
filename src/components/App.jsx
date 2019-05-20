import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import TestBody from './TestBody';
import Header from './Header';
import UserInfo from "./UserInfo";
import TestList from "./TestList";
import { connect } from 'react-redux';


function App({ user, testList }){
  return (
    <div>
      <Header />
      <br/>
      <UserInfo name={user.name} currentLevel={user.level}/>
      <TestList testList={testList}/>

      <TestBody user={user}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    testList: state.testsById
  };
};

export default connect(mapStateToProps)(App);
