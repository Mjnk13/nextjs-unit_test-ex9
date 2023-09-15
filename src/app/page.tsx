"use client"

import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import { useState } from "react"
import type { Todo } from "@/types/todo"


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      "userId": 1,
      "title": "Wave hello! 👋",
      "completed": false,
      "id": 1
    },
    {
      "userId": 1,
      "title": "Get Coffee ☕☕☕",
      "completed": false,
      "id": 2
    },
    {
      "userId": 1,
      "title": "Go to Work ⚒",
      "completed": false,
      "id": 3
    },
    {
      "userId": 1,
      "title": "Write Code 💻",
      "completed": false,
      "id": 4,
    }
  ])

  return (
    <div className="mt-5 px-5">
      <h2 className="text-center">Welcome User</h2>
      <div className="p-10 border-solid border-black border-2">
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}