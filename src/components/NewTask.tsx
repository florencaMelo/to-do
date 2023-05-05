import React from 'react'
import { Button, Input, NewTaskContainer } from './NewTask'

export function NewTask() {
  return(
    <NewTaskContainer>
      <Input placeholder='Adicione uma nova tarefa' /> 
      <Button>Criar</Button>
    </NewTaskContainer>
  )
}