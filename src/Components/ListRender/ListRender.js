import React, { useState } from "react";
import "./ListRender.modules.css";
function ListRender(props) {
  const ChangeStatus = (index) => {
    props.statChange(index);
  };

  return (
    <div>
      <ul className="list-section">
        {props.listItems.length === 0 ? (
          <h1>No Task</h1>
        ) : (
          props.listItems.map((item, index) => (
            <li
              key={item.name + `${Math.random()}`}
              style={{
                color: item.status === true ? "black" : "",
                textDecoration: item.status === true ? "line-through" : "none",
              }}
              onClick={() => {
                ChangeStatus(index);
              }}
            >
              {item.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ListRender;
