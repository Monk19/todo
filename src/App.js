import "./App.css";
import { useState } from "react";
import InputSection from "./Components/InputSection/InputSection";
import ListRender from "./Components/ListRender/ListRender";
import TaskCount from "./Components/TaskCount/TaskCount";
function App() {
  const [cArray, setcArray] = useState([]);
  const [cCount, setcCount] = useState({
    completed: "",
    incomplete: "",
  });
  const addTask = (item) => {
    if (item.name.length === 0) {
      console.log("Enter a valid item");
      return;
    } else {
      setcArray([item, ...cArray]);
    }
  };
  const statusChange = (iden) => {
    const completedTask = cArray.map((item, index) => {
      if (iden === index) {
        item.status = true;
        return item;
      } else {
        return item;
      }
    });
    setcArray(completedTask);
    CountTasks();
  };
  const CountTasks = () => {
    let ctask = cArray.filter((ele) => {
      return ele.status === true;
    });
    setcCount({
      completed: ctask.length,
      incomplete: cArray.length - ctask.length,
    });
    console.log(cCount.completed, cCount.incomplete);
  };
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <InputSection headTask={addTask} />
      {cArray.length === 0 ? (
        " "
      ) : (
        <TaskCount
          t1={cCount.completed}
          t2={cCount.incomplete}
          t3={cArray.length}
        />
      )}
      <ListRender listItems={cArray} statChange={statusChange} />
    </div>
  );
}

export default App;
