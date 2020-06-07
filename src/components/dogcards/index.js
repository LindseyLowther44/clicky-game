import React from "react";
import "./style.css";

function Dogcard(props) {
  return (
      <div className="col-sm-3">
        <div className="card">
          <img
            alt={props.name}
            src={props.image}
            id={props.id}
            onClick={() => props.sortdogs(props.id)}
            height="200px" width="auto"
          />
        </div>
      </div>

  );
}

export default Dogcard;
