import React from 'react';

function TestInfo(props)
{
  return(
    <div>
      <p>Time left: {props.timeLeft/1000}</p>
    </div>
  );
}

export default TestInfo;