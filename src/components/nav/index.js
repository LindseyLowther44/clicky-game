import React from "react";
import "./style.css";

function Score(props) {
  return (
    <>
      <div className="jumbotron" >
        <div className="container">
          
            <h1 className="display-4">Clicky Game</h1>
            <br />
         
          
            <p id="msg" style={{ color: `${props.textColor}` }}>
              {props.msg}
            </p>

            <p id="score">
              Score: {props.score} | Topscore: {props.topscore}
            </p>
          
        </div>
      </div>
    </>
  );
}

export default Score;
