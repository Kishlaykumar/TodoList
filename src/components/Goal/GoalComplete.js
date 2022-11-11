import React, { useState, useEffect }  from 'react'
import GoalForm from "./GoalForm"
import GoalList from "./GoalList"
const LOCAL_STORAGE_KEY = "todoApp.goals"
export default function TodoComplete() {
    const [goals, setgoals] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setgoals(storedTodos)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
        }, [goals])


    return (
        <div>
            <GoalForm  goals={goals} setgoals={setgoals}/>
            <GoalList  goals={goals} setgoals={setgoals}/>
        </div>
    )
}
