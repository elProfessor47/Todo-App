import React from "react";

import { FaSquareCheck } from "react-icons/fa6";
import { MdCancel, MdEditSquare , MdDeleteForever} from "react-icons/md";

const TodoItems = ({ currTask, checked, onDeleteTodo, onCheckedTodo, onEditTodo}) => {
  return (
    <li className="flex items-center justify-between h-12 py-2 pl-8 m-2 text-xl text-black bg-white rounded-xl w-72 9h:w-200 f8:w-120 fh:w-94 sm:w-140 md:w-160 lg:w-220 sm:h-14 md:h-16">
      <span title={currTask} className={`truncate ${checked ? "line-through" : ""}`}>{currTask}</span>
      <div className="flex items-center justify-between gap-1 fh:gap-6 f8:gap-8 ">
        <button className="text-4xl cursor-pointer" 
        onClick={() => onCheckedTodo(currTask)}>
          {checked ? <MdCancel title="Cancel" className="text-red-500 hover:text-red-600 transition-colors duration-150  " /> : <FaSquareCheck title="Check" className="text-green-500 hover:text-green-600 transition-colors duration-150 " />}
        </button>
        <button
          className="pr-1 text-blue-700 text-4xl cursor-pointer md:pr-3"
          onClick={() => onEditTodo(currTask)}
        >
          <MdEditSquare  title="Edit" />
        </button>
        <button
          className="pr-1 text-4xl cursor-pointer md:pr-3"
          onClick={() => onDeleteTodo(currTask)}
        >
          <MdDeleteForever title="Delete" />
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
