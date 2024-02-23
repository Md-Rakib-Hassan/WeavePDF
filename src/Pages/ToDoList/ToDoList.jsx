import { useState } from "react";
import TodoInput from "./ToDoInput";
import Todolist from "./ToDoTask";

function ToDoList() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-3xl font-bold pb-3">Create Your TODO List</h1>
        <p className="pb-10">Organize Your Day: The Ultimate Todo List Guide</p>
        <TodoInput addList={addList} />
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
