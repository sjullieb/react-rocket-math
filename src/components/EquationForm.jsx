import React from 'react';
//import constants from "./../constants";
import { saveAnswer} from "./../actions";
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function EquationForm({ dispatch, equation }){
    let _answer = null;
    //const { initialState, types } = constants;
    const { id, term1, term2, operator } = equation;

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
                <input type="number" ref={(input) => {_answer.input;}}/>
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default connect()(EquationForm);