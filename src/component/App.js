import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
function App() {
  const [ToDoItems, setToDoItems] = useState([]);

  function additem(item) {
    setToDoItems((prevItem) => {
      return [...prevItem, item];
    });
  }
  function deleteItem(id) {
    setToDoItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="w-full h-auto bg-white rounded border-r-2 p-1 ">
      <div className="flex items-center justify-center p-2 ">
        <h1 className="rotate-2 px-1 py-2 mb-1 bg-yellow-300 rounded-md p-2">
          To-Do List
        </h1>
      </div>
      <InputArea onAdd={additem} />
      <div>
        <ul className="list-disc m-10">
          {ToDoItems.map((eachitem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={eachitem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
