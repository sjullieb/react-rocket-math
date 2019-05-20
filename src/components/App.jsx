import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import TestBody from './TestBody';
import Header from './Header';
import UserInfo from "./UserInfo";
import { connect } from 'react-redux';


function App({ user }){
  return (
    <div>
      <Header />
      <br/>
      <UserInfo name={user.name} currentLevel={user.level}/>
      <TestBody user={user}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
