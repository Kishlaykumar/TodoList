import React, {useRef} from 'react'
import "../style.css"




export default function TodoInfo({task, info, setInfo, settasks}) {

const todoInfoRef = useRef()
 
function closeInfo() {
    setInfo(false)
}

function setTodoInfo(id) {
    let todoInfo = todoInfoRef.current.value
   /*  if(todoInfo === "") return   */
        settasks(prevTodos => {
            let newTodos = [...prevTodos]
        task.info = todoInfo
            return newTodos
        })               
}

function setTodoInput() {
    todoInfoRef.current.value = task.info
}

function onKeyUp(event) {
    if (event.key === "Enter") {
      setTodoInfo()
    }
}
    return (
        <div className="info-container">
       <form >
       <textarea className="todo-input-info" onChange={setTodoInfo}  onKeyPress={onKeyUp} type="text" ref={todoInfoRef} placeholder={task.info ? task.info : "Enter Info"} onClick={setTodoInput} />
       </form>
       <button onClick={closeInfo} className="delete-button" > Close </button>
       </div>
    )
}

