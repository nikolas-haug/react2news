import React from "react";

const Button = (props) => {
  return(
    <button onClick={props.handleButtonClick} className="btn btn-warning btn-lg">Search</button>
  )
};

export default Button;
