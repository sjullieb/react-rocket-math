import React, { Component } from 'react';
import TestInfo from './TestInfo';
import FactForm from './FactForm';
import { connect } from 'react-redux';
import constants from "./../constants";
import { saveAnswer, initializeState, completeTest, nextFactIndex, checkAnswer, updatePass, updateComplete } from "./../actions";

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
    const { dispatch, factIndex, facts } = this.props;
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
    facts: state.currentTest.facts
  };
};

export default connect(mapStateToProps)(TestBody);