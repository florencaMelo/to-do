import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Button, Input, NewTaskContainer } from './NewTask'

interface Task {
  taskText: string
  completed: boolean
}

interface NewTaskProps {
  tasks: Task[]
  setTasks: (newValue: Task[]) => void
}

export function NewTask({ tasks, setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newCreatedTask:Task = {
      taskText: newTask, 
      completed: false
    }

    setTasks([...tasks, newCreatedTask])
    setNewTask('')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return(
    <div>
      <NewTaskContainer>
        <form onSubmit={handleCreateNewTask}>
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