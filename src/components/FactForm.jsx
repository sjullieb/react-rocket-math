import React from 'react';
//import constants from "./../constants";
import { saveAnswer } from "./../actions";
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function FactForm({ dispatch, fact, id }){
    let _answer = null;
    //const { initialState, types } = constants;
    console.log(fact);
    
    const { term1, term2, operator } = fact;

    function handleAnswerSubmission(event){
        event.preventDefault();
        dispatch(saveAnswer(id, _answer.value));
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

export default connect()(FactForm);