import React from "react";

function FactForm({ fact, operator, onAnswerSubmission, factNo, totalNo }) {
  let _answer = null;
  //console.log(fact);
  //console.log(onAnswerSubmission);

  const { term1, term2 } = fact;

  function handleAnswerSubmission(event) {
    event.preventDefault();
    onAnswerSubmission(parseInt(_answer.value));
    _answer.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAnswerSubmission}>
        <label>
          {factNo} / {totalNo}
        </label>
        <br />
        <label>{term1}</label>
        <br />
        <label>{operator}</label>
        <br />
        <label>{term2}</label>
        <br />
        <hr />
        <input
          type="number"
          ref={input => {
            _answer = input;
          }}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FactForm;
