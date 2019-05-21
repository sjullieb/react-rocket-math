import React from "react";

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%'
};
function FactList(props){

  return(
    <div style={styleGrid}>
      {props.factList.map((fact, index) => {
        <FactDetails fact={fact} key={index}/>})
      }
    </div>
  );
}

export default FactList;