import React from "react";

function FactDetails(props){
  const { term1, term2, result, answer} = props.fact;
  const { operator } = props;

  console.log(props.fact);
  
  return(
    <div>
      <label>{term1}</label><br/>
      <label>{operator}    </label><br/>
      <label>{term2}</label><br/>
      <hr />
      <label>{answer}</label><br/>
      <label>{result}</label><br/>
    </div>
  );
}

export default FactDetails;