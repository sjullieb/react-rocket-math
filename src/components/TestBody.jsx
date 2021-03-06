import React, { Component } from "react";
import TestInfo from "./TestInfo";
import FactForm from "./FactForm";
import { connect } from "react-redux";
import constants from "./../constants";
import { v4 } from "uuid";
import {
  saveAnswer,
  initializeState,
  completeTest,
  nextFactIndex,
  checkAnswer,
  updateCorrectAnswers,
  updatePass,
  updateComplete,
  saveCurrentTest,
  saveUserTest,
  updateUserLevel,
  updateTimer,
  stopTimer,
  clearCurrentTest
} from "./../actions";

class TestBody extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  startTimer() {
    this.props.dispatch(updateTimer(this.props.user.testTime));
    this.testTimer = setInterval(() => this.updateTestTime(), 1000);
  }

  clearTimer() {
    this.props.dispatch(stopTimer());
    clearInterval(this.testTimer);
  }

  componentDidMount() {
    this.props.dispatch(initializeState());
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  updateTestTime() {
    if (this.props.currentTest.timeLeft > 0) {
      this.props.dispatch(updateTimer(this.props.currentTest.timeLeft - 1000));
    } else {
      this.clearTimer();
    }
  }

  handleAnswerSubmission(answer) {
    const { dispatch } = this.props;
    const {
      factIndex,
      facts,
      level,
      operator,
      correctAnswers,
      pass
    } = this.props.currentTest;
    const { userId } = this.props.user.id;
    dispatch(saveAnswer(factIndex, parseInt(answer)));

    if (facts[factIndex].result == answer) {
      dispatch(updateCorrectAnswers());
    }

    // dispatch(checkAnswer(factIndex));

    if (factIndex == facts.length - 1) {
      // test is completed
      dispatch(updatePass()); // check if test is passed
      dispatch(updateComplete()); // update test completness
      dispatch(completeTest()); //??

      const testId = v4();

      // add test to the testById
      dispatch(
        saveCurrentTest(
          testId,
          userId,
          level,
          operator,
          this.props.currentTest.correctAnswers,
          this.props.currentTest.pass,
          this.props.currentTest.timestamp,
          facts
        )
      );

      // add testId to the user's tests arrya
      dispatch(saveUserTest(testId));

      //update user's level if test is passed and it's not the last test
      // TODO: uncomment!!!
      //if (this.props.currentTest.pass == "true" && level < "Z")
      {
        dispatch(updateUserLevel());
      }

      // stop timer
      this.clearTimer();
    } else {
      // increase factIndex
      dispatch(nextFactIndex());
    }
  }

  handleBackButtonClick() {
    this.props.dispatch(clearCurrentTest());
  }

  render() {
    const { factIndex, facts, currentTest, complete } = this.props;
    let showTest;

    if (currentTest.timeLeft > 0) {
      showTest = (
        <FactForm
          fact={facts[factIndex]}
          operator={currentTest.operator}
          onAnswerSubmission={this.handleAnswerSubmission}
          factNo={factIndex + 1}
          totalNo={facts.length}
        />
      );
    } else {
      showTest = (
        <div>
          <p>Test is over!</p>
          <button onClick={this.handleBackButtonClick}>Go back</button>
        </div>
      );
    }

    return (
      <div>
        <TestInfo
          timeLeft={currentTest.timeLeft}
          operator={currentTest.operator}
          level={currentTest.level}
        />
        {showTest}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTest: state.currentTest,
    factIndex: state.currentTest.factIndex,
    facts: state.currentTest.facts,
    all: state
  };
};

export default connect(mapStateToProps)(TestBody);
