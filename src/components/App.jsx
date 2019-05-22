import React from "react";
import TestBody from "./TestBody";
import Header from "./Header";
import UserInfo from "./UserInfo";
import TestList from "./TestList";
import FactsList from "./FactsList";
import NewTest from "./NewTest";
import { connect } from "react-redux";
import { createNewTest } from "./../actions";
import store from "./../index";

function App({
  user,
  testList,
  shownTestId,
  currentTest,
  dispatch,
  masterFacts,
  masterSets
}) {
  //console.log(getState());

  let shownTestDetails = null;
  if (!!shownTestId) {
    shownTestDetails = (
      <FactsList
        factList={testList[shownTestId].facts}
        operator={testList[shownTestId].operator}
        test={testList[shownTestId]}
      />
    );
  }

  let currentTestSection = null;
  console.log("currentTest", currentTest);

  if (currentTest.hasOwnProperty("timestamp") == false) {
    console.log("newTest component");
    console.log(user);

    currentTestSection = <NewTest user={user} />;
  } else {
    console.log("running test");

    currentTestSection = <TestBody user={user} />;
  }

  console.log("shownTestDetails for ", shownTestId);

  console.log(shownTestDetails);
  //StartNewTest("E", "+", 60000);

  return (
    <div>
      <style jsx global>{`
        div {
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
      `}</style>
      <Header />
      <br />
      <UserInfo name={user.name} currentLevel={user.level} />
      {shownTestDetails}
      <TestList testList={testList} />
      {currentTestSection}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    shownTestId: state.shownTestId,
    testList: state.testsById,
    currentTest: state.currentTest,
    masterSets: state.masterSets,
    masterFacts: state.masterFacts
  };
};

export default connect(mapStateToProps)(App);
