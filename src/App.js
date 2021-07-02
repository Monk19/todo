import "./App.css";
import { useState } from "react";
import InputSection from "./Components/InputSection/InputSection";
import ListRender from "./Components/ListRender/ListRender";
function App() {
  const [cArray, setcArray] = useState([]);

  const addTask = (item) => {
    console.log(cArray);
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
        console.log(item);
        return item;
      }
    });
    setcArray(completedTask);
  };
  return (
    <div className="App">
      <InputSection headTask={addTask} />
      <ListRender listItems={cArray} statChange={statusChange} />
    </div>
  );
}

export default App;
