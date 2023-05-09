import React, { useState } from 'react'
import { Button, Input, NewTaskContainer } from './NewTask'

export function NewTask() {

  const [tasks, setTasks] = useState([])

  const [newTaskName, setNewTaskName] = useState('')

  function handleCreateNewTask(event) {
    event.preventDefault()
    setTasks([...tasks, newTaskName])
  }

  function handleInputChange(event){
    setNewTaskName(event.target.value)
  }

  return(
    <NewTaskContainer>
      <form onSubmit={handleCreateNewTask}>
        <Input
         placeholder='Adicione uma nova tarefa'
         onChange={handleInputChange}
         value={newTaskName}
        /> 
        <Button>Criar</Button>
      </form>
    </NewTaskContainer>
  )
}