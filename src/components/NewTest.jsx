import React from "react";

function NewTest({ currentLevel, operator }) {
  let _answer = null;
  //console.log(fact);
  //console.log(onAnswerSubmission);

  const { term1, term2 } = fact;

  function handleAnswerSubmission(event) {
    event.preventDefault();
    onAnswerSubmission(_answer.value);
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

export default NewTest;
