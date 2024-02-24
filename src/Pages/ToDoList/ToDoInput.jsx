import { useState } from "react";

function ToDoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        placeholder="Enter your todo list"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="bg-teal text-white rounded-full p-2 px-4 ml-4 text-2xl"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ToDoInput;
