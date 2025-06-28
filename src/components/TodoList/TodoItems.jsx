import React from "react";

import { FaSquareCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const TodoItems = ({ currTask, checked, onDeleteTodo, onCheckedTodo }) => {
  return (
    <li className="flex items-center justify-between h-12 py-2 pl-8 pr-2 m-2 text-xl text-black bg-white rounded-xl w-72 9h:w-200 f8:w-120 fh:w-94 sm:w-140 md:w-160 lg:w-220 sm:h-14 md:h-16">
      <span className={` ${checked ? "line-through" : ""}`}>{currTask}</span>
      <div className="flex items-center justify-between px-2 9h:gap-16 f8:gap-10 fh:gap-4 sm:gap-14 md:gap-14 lg:gap-15">
        <button className="text-4xl cursor-pointer" 
        onClick={() => onCheckedTodo(currTask)}>
          {checked ? <MdCancel className="text-red-500 " /> : <FaSquareCheck className="text-green-500 " />}
        </button>
        <button
          className="pr-1 text-4xl cursor-pointer md:pr-3"
          onClick={() => onDeleteTodo(currTask)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
