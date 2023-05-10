import React, { useState } from 'react'
import { Button, Input, NewTaskContainer } from './NewTask'
import { Tarefas } from './Tarefas.tsx'
import { Info } from './Info.tsx'

export function NewTask() {

  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewComment(event) {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  return(
    <div>
      <NewTaskContainer>
      <form onSubmit={handleCreateNewComment}>
        <Input 
          onChange={handleInputChange}
          value={newTask}
        /> 
        <Button>Criar</Button>
      </form>
    </NewTaskContainer>
    <Info tasks={tasks} />
    <Tarefas tasks={tasks} />
    </div>
  )
}