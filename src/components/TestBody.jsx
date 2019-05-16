import React, { Component } from 'react';
import TestInfo from './TestInfo';
import FactForm from './FactForm';
import { connect } from 'react-redux';
import constants from "./../constants";
import actions from './../actions';

class TestBody extends Component {
  
  componentDidMount() {
    this.props.dispatch(actions.initializeState);
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

  render(){
    console.log(this.props.currentSetFacts);
    
    return(
      <div>
        <TestInfo />
        <FactForm fact={this.props.currentSetFacts[0]} id={0}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   // factIndex: state.currentFactIndex,
    currentSetFacts: state.currentSet.facts
  };
};

export default connect(mapStateToProps)(TestBody);