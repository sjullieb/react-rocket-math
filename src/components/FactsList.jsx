import React from "react";
import FactDetails from "./FactDetails";

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%'
};
function FactList(props){

  return(
    <div>
      <h4>Test {props.test.level} taken {props.test.timestamp} Results</h4>
      <div style={styleGrid}>
        {props.factList.map((newFact, index) => 
          
          <FactDetails fact={newFact} operator={props.operator} id={index} key={index}/>)
        }
      </div>
    </div>
  );
}

export default FactList;