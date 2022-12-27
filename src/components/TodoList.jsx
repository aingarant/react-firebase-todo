import { useState, uesEffect, useEffect } from "react";
import TodoItem from "./TodoItem";
import { db } from "../lib/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

import Loading from "./Loading";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // get realtime data (on update)
  const realtimeData = () => {
    onSnapshot(collection(db, "todos"), (result) => {
      const newTodos = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        todo: doc.data().title,
      }));
      setTodos(newTodos);
    });
  };

  // get data on refresh
  const getData = () => {
    setLoading(true);
    getDocs(collection(db, "todos"))
      .then((result) => {
        const newTodos = result.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          todo: doc.data().title,
        }));
        setTodos(newTodos);
      })

      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    // getData();
    realtimeData();
  }, []);

  return (
    <div className="mx-auto">
      {loading ? <Loading /> : null}

      {todos
        ? todos.map((todo, index) => {
            return (
              <div key={index} className="p-2">
                <TodoItem todo={todo} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TodoList;
