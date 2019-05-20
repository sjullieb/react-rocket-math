import React from "react";

function UserInfo({ name, currentLevel }){
  return(
    <div>
      <p>Name: {name} | Current level: {currentLevel} </p>
    </div>
  );
}

export default UserInfo;