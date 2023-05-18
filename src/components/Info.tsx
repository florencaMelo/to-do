import React from "react"
import { DivContainer, InfoContainer } from "./Info"

interface Task {
  taskText: string
  completed: boolean
}

interface InfoProps {
  tasks: Task[]
}

export function Info({ tasks }: InfoProps) {
  return(
    <InfoContainer>
      <DivContainer>
        <p>Tarefas criadas</p>
        <span>{tasks.length}</span>
      </DivContainer>
      <DivContainer>
        <p>Concluídas</p>
        <span>0</span>
      </DivContainer>
    </InfoContainer>
  )
}