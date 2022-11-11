import React, { useState, useEffect }  from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const LOCAL_STORAGE_KEY = "todoApp.todos"
export default function TodoComplete() {
    const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        }, [todos])


    return (
        <div>
            <TodoForm  todos={todos} setTodos={setTodos}/>
            <TodoList  todos={todos} setTodos={setTodos}/>
        </div>
    )
}
