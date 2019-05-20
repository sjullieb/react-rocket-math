import React from 'react';

function TestInfo(props)
{
  return(
    <div>
      <p>Test level: {props.level}</p>
      <p>Time left: {props.timeLeft/1000}</p>
    </div>
  );
}

export default TestInfo;