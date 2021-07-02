import React, { useState } from "react";

const InputSection = (props) => {
  const [currentItem, setCurrentItem] = useState("");
  const newTask = (e) => {
    setCurrentItem(e.target.value);
  };
  const addingTaskToMain = (e) => {
    e.preventDefault();
      props.headTask({ name: currentItem, status: false });
      setCurrentItem("")
  };

  return (
    <div>
      <form onSubmit={addingTaskToMain}>
        <input
          type="text"
          onChange={newTask}
          placeholder="Enter a task to keep track"
          value={currentItem}
        ></input>
        <button>Add-Task</button>
      </form>
    </div>
  );
};

export default InputSection;
