import React, { Component } from 'react';
import TestInfo from './TestInfo';
import FactForm from './FactForm';
import { connect } from 'react-redux';
import constants from "./../constants";
import { v4 } from 'uuid';
import { saveAnswer, initializeState, completeTest, nextFactIndex, checkAnswer, updatePass, updateComplete, saveCurrentTest } from "./../actions";

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
    dispatch(checkAnswer(factIndex));
    console.log("check next fact/ or complete");
    if(factIndex == facts.length - 1){
      console.log("last fact");
      

      console.log(this.props.currentTest);
    
      dispatch(updatePass());
      dispatch(updateComplete());      
      dispatch(completeTest());
      console.log("pass", this.props.currentTest.pass);      
      console.log("complete", this.props.currentTest.complete);   
      // store.getState();     
      console.log(this.props);
      
  //    const { factIndex, facts, userId, level, operator, correctAnswers, pass } = this.props.currentTest;
      dispatch(saveCurrentTest(v4(), 0, level, operator, this.props.correctAnswers, this.props.pass, this.props.timestamp, facts))    
    } else {
      dispatch(nextFactIndex());
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
    all: state
  };
};

export default connect(mapStateToProps)(TestBody);