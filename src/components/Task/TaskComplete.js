import React, { useState, useEffect }  from 'react'
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
const LOCAL_STORAGE_KEY = "todoApp.tasks"
export default function TodoComplete() {
    const [tasks, settasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) settasks(storedTasks)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
        }, [tasks])


    return (
        <div>
            <TaskForm  tasks={tasks} settasks={settasks}/>
            <TaskList  tasks={tasks} settasks={settasks}/>
        </div>
    )
}
