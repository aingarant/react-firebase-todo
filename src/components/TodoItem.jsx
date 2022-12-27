import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="p-4 bg-gray-800 text-white hover:bg-red-400 hover:text-white">
        {todo.title}
      </div>
    </>
  );
};

export default TodoItem;
