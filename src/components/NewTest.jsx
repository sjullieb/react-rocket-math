import React from "react";
import { connect } from "react-redux";
import { createNewTest } from "../actions";

function NewTest({ user, masterSets, masterFacts, dispatch }) {
  console.log("new test");

  const { level, operator, timer } = user;
  //let _answer = null;
  //console.log(fact);
  //console.log(onAnswerSubmission);

  // const { term1, term2 } = fact;

  // function handleAnswerSubmission(event) {
  //   event.preventDefault();
  //   onAnswerSubmission(_answer.value);
  //   _answer.value = "";
  // }

  function StartNewTest(level, operator, timer) {
    console.log(masterFacts);

    const setId = level + operator;
    const factIds = masterSets[setId].facts;
    const facts = factIds.map(factId => {
      console.log(masterFacts[factId]);
      return Object.assign({}, masterFacts[factId], { answer: null });
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
    console.log(currentTest);

    dispatch(createNewTest(level, operator, timer, facts));
  }

  function handleStartTestButtonClick() {
    StartNewTest(level, operator, timer);
  }

  return (
    <div>
      <button onClick={handleStartTestButtonClick}>Start the test!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    masterSets: state.masterSets,
    masterFacts: state.masterFacts
  };
};

export default connect(mapStateToProps)(NewTest);
