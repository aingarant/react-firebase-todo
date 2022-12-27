import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="2xl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-full mx-auto">
      {/* <Login /> */}
      <h1 className="text-4xl font-extrabold text-center p-4">Aingaran's Simple Todo App</h1>
      <NewTodoForm />
      <TodoList />
    </div>
  ) 
}

export default App
