import React, { Component } from 'react';
import TestInfo from './TestInfo';
import FactForm from './FactForm';
import { connect } from 'react-redux';
import constants from "./../constants";
import { v4 } from 'uuid';
import { saveAnswer, initializeState, completeTest, nextFactIndex, checkAnswer, updatePass, updateComplete, saveCurrentTest, saveUserTest, updateUserLevel } from "./../actions";

class TestBody extends Component {
  
  constructor(props){
    super(props);
    this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(initializeState());
    this.testTimer = setInterval(() =>
      this.updateTestTime(),
    1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.testTimer);
  }

  updateTestTime(){
    console.log('updateTimer');    
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
      console.log(this.props.all);
      
  //    const { factIndex, facts, userId, level, operator, correctAnswers, pass } = this.props.currentTest;
  //saveCurrentTest = (testId, userId, level, operator, correctAnswers, pass, timestamp, facts)  
  //console.log('saving', this.props.currentTest.correctAnswers, this.props.currentTest.pass,);
      const testId = v4();
      const userId = 0;
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

    } else {
      dispatch(nextFactIndex());
      console.log('change to next FactIndex');
      console.log(factIndex);
    }
  };

  render(){
    const { factIndex, facts } = this.props;
    
    return(
      <div>
        <TestInfo />
        <FactForm fact={facts[factIndex]}  onAnswerSubmission={this.handleAnswerSubmission}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTest: state.currentTest,
    factIndex: state.currentTest.factIndex,
    facts: state.currentTest.facts,
   // userId: state.user.id,
    all: state
  };
};

export default connect(mapStateToProps)(TestBody);