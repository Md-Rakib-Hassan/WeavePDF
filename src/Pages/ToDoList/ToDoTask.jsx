import { FaTrash } from "react-icons/fa";

function ToDoTask(props) {
  return (
    <li className="flex items-center p-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">{props.item}</span>
        <FaTrash
          className="text-red-500 cursor-pointer hover:text-red-700"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        />
      </div>
    </li>
  );
}

export default ToDoTask;
