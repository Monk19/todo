import React from "react";
import "./TaskCount.modules.css";
function TaskCount(props) {
  return (
    <div className="Count">
      <div className="total" style={{ color: "black" }}>
        Total-task--{props.t3}
      </div>
      <div className="complete" style={{ color: "coral" }}>
        Completed task--{props.t1}
      </div>
      <div className="incomplete" style={{ color: "white" }}>
        incomplete task--{props.t2}
      </div>
    </div>
  );
}

export default TaskCount;
