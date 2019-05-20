import React, { Component } from 'react';
import TestInfo from './TestInfo';
import FactForm from './FactForm';
import { connect } from 'react-redux';
import constants from "./../constants";
import { v4 } from 'uuid';
import { saveAnswer, initializeState, completeTest, nextFactIndex, checkAnswer, updatePass, updateComplete, saveCurrentTest, saveUserTest, updateUserLevel, updateTimer, stopTimer } from "./../actions";

class TestBody extends Component {
  
  constructor(props){
    super(props);
    this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this);
  }

  startTimer(){
    this.props.dispatch(updateTimer(10000));
    this.testTimer = setInterval(() =>
      this.updateTestTime(),
    1000
    );
  }

  clearTimer(){
    this.props.dispatch(stopTimer());
    clearInterval(this.testTimer);
  }

  componentDidMount() {
    this.props.dispatch(initializeState());
    this.startTimer();
  }

  componentWillUnmount(){
    clearTimer();
  }

  updateTestTime(){
    if(this.props.currentTest.timeLeft > 0){
      this.props.dispatch(updateTimer(this.props.currentTest.timeLeft - 1000));
      console.log('updateTimer');
    } else {
      clearTimer();
    }
  }

  handleAnswerSubmission(answer){
    const { dispatch } = this.props;
    const { factIndex, facts, userId, level, operator, correctAnswers, pass } = this.props.currentTest;
    dispatch(saveAnswer(factIndex, parseInt(answer)));
    console.log(factIndex);
    
    dispatch(checkAnswer(factIndex));
    console.log(this.props.currentTest.correctAnswers)
    console.log("check next fact/ or complete");
    if(factIndex == facts.length - 1){
      console.log("last fact, currentTest");
      console.log(this.props.currentTest);
    
      dispatch(updatePass());
      console.log('update Pass');
      console.log(this.props.currentTest.pass);

      dispatch(updateComplete()); 
      console.log('update Complete');     
      console.log(this.props.currentTest.complete);

      dispatch(completeTest());
      // store.getState();     
      dispatch
      console.log(this.props.all);
      
      const testId = v4();
      //const userId = 0;
      console.log();
      
      dispatch(saveCurrentTest(testId, userId, level, operator, this.props.currentTest.correctAnswers, this.props.currentTest.pass, this.props.currentTest.timestamp, facts))    
      console.log('save current test results');
      console.log(this.props.all.tests);

      // saving to the user
      console.log('Save test to user');
      
      dispatch(saveUserTest(testId));

      //if (this.props.currentTest.pass == "true" && level < "Z")
      {
        dispatch(updateUserLevel());
      }

      this.clearTimer();

    } else {
      dispatch(nextFactIndex());
      console.log('change to next FactIndex');
      console.log(factIndex);
    }
  };

  render(){
    const { factIndex, facts, currentTest } = this.props;
    let showTest;
    if(currentTest.timeLeft > 0){
      showTest = <FactForm fact={facts[factIndex]}  onAnswerSubmission={this.handleAnswerSubmission}/>
    } else {
      showTest = <p>Test is over!</p>
    }
    
    return(
      <div>
        <TestInfo timeLeft={currentTest.timeLeft}/>
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
    userId: state.user.id,
    all: state
  };
};

export default connect(mapStateToProps)(TestBody);