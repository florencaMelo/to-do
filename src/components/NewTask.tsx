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

  function handleCreateNewComment(event: FormEvent, data: string) {
    event.preventDefault()
    const newTask:Task = {
      taskText: data, 
      completed: false
    }
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