import React from "react";

let style = {
  margin: 20
};
let wrongAnswerStyle = {
  fontDecoration: "underline"
};
let wrongStyle = {
  color: "red"
};
function FactDetails(props){
  const { term1, term2, result, answer} = props.fact;
  const { operator } = props;

  let applyWrongAnswer = wrongAnswerStyle;
  let applyWrong = wrongStyle;
  if (answer == result){
    applyWrongAnswer = null;
    applyWrong = null;
  }

  return(
    <div style={style}>
      <label>{term1}</label><br/>
      <label>{operator}    </label><br/>
      <label>{term2}</label><br/>
      <hr />
      <div style={applyWrong}>
        <label style={applyWrongAnswer}>{answer}</label><br/>
        <label>{result}</label><br/>
      </div>
    </div>
  );
}

export default FactDetails;