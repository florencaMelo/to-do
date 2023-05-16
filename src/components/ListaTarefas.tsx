import React from "react"
import { InputStyle, ListaTarefasContainer } from "./ListaTarefas"
import { Trash } from 'phosphor-react'

interface ListaTarefasProps {
  taskText: string
  onDeleteTask: (task: string) => void
}

export function ListaTarefas({taskText, onDeleteTask}: ListaTarefasProps) {

  function handleDeleteTask() {
    onDeleteTask(taskText)
  }

  return(
    <ListaTarefasContainer>

      <InputStyle type="checkbox" />

      <p>{taskText}</p>
      
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    
    </ListaTarefasContainer>
  )
}
