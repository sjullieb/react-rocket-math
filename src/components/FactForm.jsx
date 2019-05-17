import React from 'react';

function FactForm({ fact }){
    let _answer = null;
    console.log(fact);
    
    const { term1, term2, operator } = fact;

    function handleAnswerSubmission(event){
        event.preventDefault();
        props.onAnswerSubmission(_answer.value);
        _answer.value = '';
    };

    return(
        <div>
            <form onSubmit={handleAnswerSubmission}>
                <label>{term1}</label><br />
                <label>{operator}</label><br />
                <label>{term2}</label><br />
                <hr />
                <input type="number" ref={(input) => {_answer = input;}}/>
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default FactForm;