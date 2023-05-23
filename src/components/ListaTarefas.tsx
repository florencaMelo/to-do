import React, { useState } from "react"
import { InputStyle, ListaTarefasContainer } from "./ListaTarefas"
import { Trash } from 'phosphor-react'

interface Task {
  taskText: string
  completed: boolean
}

interface ListaTarefasProps {
  task: Task
  onDeleteTask: (task: string) => void
}

export function ListaTarefas({task, onDeleteTask}: ListaTarefasProps) {
  const [completed, setCompleted] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(task.taskText)
  }

  function handleCheckTask() {
    task.completed = !task.completed
    setCompleted(!task.completed)
  }

  return(
    <ListaTarefasContainer>
      <InputStyle 
        type="checkbox"
        checked={completed}
        onChange={handleCheckTask} 
      />
      <p style={{textDecoration: completed ? "line-through" : "none"}}>{task.taskText}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={18}/>
      </button>
    </ListaTarefasContainer>
  )
}
