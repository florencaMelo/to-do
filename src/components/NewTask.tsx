import React, { useState } from 'react'
import { Button, NewTaskContainer, Textarea } from './NewTask'

export function NewTask() {

  function handleCreateNewTask() {
    setTasks([...tasks,  ])
    console.log(tasks);
  }

  const [tasks, setTasks] = useState([])

  return(
    <NewTaskContainer>
      <Textarea placeholder='Adicione uma nova tarefa' /> 
      <Button onClick={handleCreateNewTask}>Criar</Button>
    </NewTaskContainer>
  )
}