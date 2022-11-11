import React, { useRef} from 'react'
import uuid from "uuidv4"


export default function TodoForm({todos, setTodos}) {
const todoNameRef = useRef()

    function addTodo(e) {
        e.preventDefault()
        const name = todoNameRef.current.value
         if(name === "") return
         setTodos(prev => {
             return [...prev, {id: uuid(), name: name, complete: false, info:""}]
         })
         todoNameRef.current.value = null
     }

    function deleteCheckedTodo() {
        let newTodos = [...todos]
       newTodos = newTodos.filter(todo => {
        return todo.complete === false
        })
        setTodos(newTodos)
    }

    return (
        <div className="todo-form-div">
            <form className="todo-form">
            <input className="new-todo-input" ref={todoNameRef} type="text" />
            <button className="add-button" onClick={addTodo}>Add Todo</button>
            </form>
            <button className="delete-button" onClick={deleteCheckedTodo}>Delete Checked Todos </button>
        </div>
    )
}
