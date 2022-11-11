import React, {useState, useRef}  from 'react'
import TodoInfo from './TodoInfo'

import "../style.css"


export default function Todo({todos, setTodos, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 

    function handleTodoClick() {
        toggleTodo(todos.id)
    }


    function createInfoPage(todo) {
        setInfo(true)
  }

    function openInfo() {
        //this todos is refering to the todo clicked  
        createInfoPage(todos)
    }

   function saveDate() {

setTodos(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
    if(todoDate === "") { todoDate = "Enter Date"}
        todos.date = todoDate
            return newTodos
        })               
}
      

    return (
        <div  className="todo-container">
            <label  className="todo-label">
                <input type="checkbox" checked={todos.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {todos.name}</p>
            </label>
           <input className="todo-input-date" type="text" placeholder= {todos.date ? `${todos.date}` : "Enter Date"} onChange={saveDate}  ref={dateRef}/>
           <div className="info-button" onClick={openInfo}>  {todos.info ? <div className='info-icon'></div> : null} Info </div>
        {info ? <TodoInfo todo={todos} key={todos.id} info={info} setInfo={setInfo} setTodos={setTodos}  /> : null}
        </div>
    )
    }