import React from 'react';
import TestBody from './TestBody';
import Header from './Header';
import UserInfo from "./UserInfo";
import TestList from "./TestList";
import FactsList from "./FactsList";
import { connect } from 'react-redux';


function App({ user, testList, shownTestId }){

  console.log(testList);
  console.log(!!shownTestId);
  
  
  let shownTestDetails = null;
  if(!!shownTestId){
    shownTestDetails = <FactsList factList={testList[shownTestId].facts} operator={testList[shownTestId].operator} test={testList[shownTestId]}/>;
  }

  console.log("shownTestDetails for ", shownTestId);
  
  console.log(shownTestDetails);
  
  return (
    <div>
      <style jsx global>{`
        div{
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
      `}</style>
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
