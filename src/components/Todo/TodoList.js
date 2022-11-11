import React from 'react'
import Todo from "./Todo"
export default function TodoList({todos, setTodos}) {

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id ===id)
        todo.complete = !todo.complete
        setTodos(newTodos)
     }


    return (
        todos.map(todos => {
            return <Todo key={todos.id} todos={todos} toggleTodo={toggleTodo} setTodos={setTodos}  />
        })
    )
}
