import React, {useState, useRef}  from 'react'
import TaskInfo from './TaskInfo'

import "../style.css"


export default function Todo({tasks, settasks, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 


    function handleTodoClick() {
        toggleTodo(tasks.id)
    }


    function createInfoPage(tasks) {
        setInfo(true)
  }

    function openInfo() {
        //this tasks is refering to the tasks clicked   
        createInfoPage(tasks)
    }

   function saveDate() {

settasks(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
    if(todoDate === "") { todoDate = "Enter Date"}
        tasks.date = todoDate
            return newTodos
        })               
}
      
  
    return (
        <div  className="todo-container">
            <label  className="todo-label">
                <input type="checkbox" checked={tasks.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {tasks.name}</p>
            </label>
           <input className="todo-input-date" type="text" placeholder= {tasks.date ? `${tasks.date}` : "Enter Date"} onChange={saveDate}  ref={dateRef}/>
           <div className="info-button" onClick={openInfo}>  {tasks.info ? <div className='info-icon'></div> : null} Info </div>
        {info ? <TaskInfo task={tasks} key={tasks.id} info={info} setInfo={setInfo} settasks={settasks}  /> : null}
        </div>
    )
    }

 