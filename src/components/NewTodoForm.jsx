import { useState, useRef } from "react";
import { db } from "../lib/firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTodoForm = () => {
  const todoRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title: newTodo,
        createdAt: Date.now(),
      });

      toast(`New Task Successfully added!:  ${newTodo}`);
      todoRef.current.value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="w-full p-2">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input type="text" ref={todoRef} className="w-full bg-red-200 text-gray-900 p-4 rounded-md" />
      </form>
    </div>
  );
};

export default NewTodoForm;
