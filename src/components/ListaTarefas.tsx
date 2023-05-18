import React, { useState } from "react"
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

  function handleCheckTask() {
  }

  return(
    <ListaTarefasContainer>
      <InputStyle 
        type="checkbox"
        onClick={handleCheckTask} 
        />
      <p>{taskText}</p>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </ListaTarefasContainer>
  )
}
