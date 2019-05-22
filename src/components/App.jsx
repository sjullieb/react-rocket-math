import React from "react";
import TestBody from "./TestBody";
import Header from "./Header";
import UserInfo from "./UserInfo";
import TestList from "./TestList";
import FactsList from "./FactsList";
import { connect } from "react-redux";
import { startTest } from "./../actions";
import store from "./../index";

function App({
  user,
  testList,
  shownTestId,
  dispatch,
  masterFacts,
  masterSets
}) {
  function StartNewTest(level, operator, timer) {
    console.log(masterSets);

    const setId = level + operator;
    const factIds = masterSets[setId].facts;
    const facts = factIds.map(factId => {
      Object.assign({}, this, masterFacts[factId], { answer: null });
    });

    let currentTest = Object.assign(
      {},
      {
        factIndex: 0,
        level: level,
        operator: operator,
        timeLeft: timer,
        correctAnswers: 0,
        complete: "false",
        pass: "false",
        timestamp: Date.now(),
        facts: facts
      }
    );
    dispatch(startTest(level, operator, timer, facts));
  }

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

  console.log("shownTestDetails for ", shownTestId);

  console.log(shownTestDetails);
  StartNewTest("E", "+", 60000);

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
      <TestBody user={user} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    shownTestId: state.shownTestId,
    testList: state.testsById,
    masterSets: state.masterSets,
    masterFacts: state.masterFacts
  };
};

export default connect(mapStateToProps)(App);
