import { useState, useRef } from "react";
import TodoInput from "./ToDoInput";
import TodoTask from "./ToDoTask";
import html2pdf from "html2pdf.js";

function ToDoList() {
  const [listTodo, setListTodo] = useState([]);
  const todoListRef = useRef(null);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const downloadPDF = () => {
    const input = todoListRef.current;

    if (input) {
      const pdfOptions = {
        margin: 10,
        filename: "todo_list.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf(input, pdfOptions);
    }
  };

  return (
 <div className="h-full">
     <div className="max-w-2xl mx-auto my-20 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Create Your ToDo List</h1>
      <p className="text-gray-600 mb-8 text-center">
        Organize Your Day: The Ultimate ToDo List Guide
      </p>
      <div className="mb-4">
        <TodoInput addList={addList} />
      </div>
      <hr className="mb-4" />
      <div ref={todoListRef}>
        {listTodo.map((listItem, i) => (
          <TodoTask key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        ))}
      </div>
      {listTodo.length > 0 && (
        <div className="flex justify-end mt-4">
          <button
            className="bg-aqua_marine text-white rounded-full p-2 px-4 text-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={downloadPDF}
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
 </div>
  );
}

export default ToDoList;
