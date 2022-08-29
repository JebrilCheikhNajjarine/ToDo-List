import { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }
  return (
    <div className="">
      <input
        onChange={handleChange}
        className="bg-transparent p-1 border border-transparent   border-dashed border-t-0 border-l-0 border-r-0 border-yellow-500 w-3/4 mb-2"
        type="text"
        value={item}
      />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
        className="p-0  border-2  border-black rounded-md bg-yellow-500"
      >
        <span className="bg-white block border-1 border-gray-300 p-1">Add</span>
      </button>
    </div>
  );
}
export default InputArea;
