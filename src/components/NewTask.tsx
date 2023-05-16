import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Button, Input, NewTaskContainer } from './NewTask'

interface NewTaskProps {
  tasks: string[],
  setTasks: (newValue: string[]) => void
}

export function NewTask({ tasks, setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return(
    <div>
      <NewTaskContainer>
        <form onSubmit={handleCreateNewComment}>
          <Input 
            placeholder={'Adicione uma nova tarefa'}
            onChange={handleInputChange}
            value={newTask}
          /> 
          <Button>Criar</Button>
        </form>
      </NewTaskContainer>
    </div>
  )
}