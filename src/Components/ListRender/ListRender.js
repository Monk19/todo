import React, { useState } from "react";

function ListRender(props) {
  const ChangeStatus = (index) => {
    props.statChange(index);
  };

  return (
    <div>
      <ul>
        {props.listItems.length === 0 ? (
          <h1>No Task</h1>
        ) : (
          props.listItems.map((item, index) => (
            <li
              key={item.name + `${Math.random()}`}
              style={{
                color: item.status === true ? "red" : "blue",
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
