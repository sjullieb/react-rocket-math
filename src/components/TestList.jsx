import React from "react";
import { connect } from "react-redux";

function TestList(props){

  function showPass(pass){
    return (pass != "false") ? "yes" : "no";
  };

  return(
    <div>
      {Object.keys(props.testList).map((testId) => {
        let test = props.testList[testId];
        return(
          <p key={testId} onClick={() => {props.dispatch(changeShownTest(testId))}}>Id: {test.id} Level: {test.level} Date: {test.timestamp} Passed: {showPass(test.pass)}</p>
        );
      })}
    </div>
  );
}

export default connect()(TestList);