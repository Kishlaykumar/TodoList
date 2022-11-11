import React, {useRef} from 'react'
import "../style.css"

export default function TodoInfo({todo, info, setInfo, setTodos}) {
const todoInfoRef = useRef()
 
function closeInfo() {
    setInfo(false)
}

function setTodoInfo(id) {
    let todoInfo = todoInfoRef.current.value
    /* if(todoInfo === "") return   */
        setTodos(prevTodos => {
            let newTodos = [...prevTodos]
        todo.info = todoInfo
            return newTodos
        })               
}

function setTodoInput() {
    todoInfoRef.current.value = todo.info
}

function onKeyUp(event) {
    if (event.key === "Enter") {
      setTodoInfo()
    }
}
    return (
        <div className="info-container">
       <form >
       <textarea className="todo-input-info" onChange={setTodoInfo}  onKeyPress={onKeyUp} type="text" ref={todoInfoRef} placeholder={todo.info ? todo.info : "Enter Info"} onClick={setTodoInput} />
       </form>
       <button onClick={closeInfo} className="delete-button" > Close </button>
       </div>
    )
}

