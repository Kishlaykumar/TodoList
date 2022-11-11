import React, { useRef} from 'react'


import uuid from "uuidv4"


export default function TodoForm({tasks, settasks}) {

const todoNameRef = useRef()

    function addTodo(e) {
        e.preventDefault()
        const name = todoNameRef.current.value
         if(name === "") return
         settasks(prev => {
             return [...prev, {id: uuid(), name: name, complete: false, info:""}]
         })
         todoNameRef.current.value = null
     }

    function deleteCheckedTodo() {
        let newTodos = [...tasks]
       newTodos = newTodos.filter(todo => {
        return todo.complete === false
        })
        settasks(newTodos)
    }

    return (
        <div className="todo-form-div">
            <form className="todo-form">
            <input className="new-todo-input" ref={todoNameRef} type="text" />
            <button className="add-button" onClick={addTodo}>Add Task</button>
            </form>
            <button className="delete-button" onClick={deleteCheckedTodo}>Delete Checked Tasks </button>
        </div>
    )
}
