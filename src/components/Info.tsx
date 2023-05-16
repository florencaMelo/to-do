import React from "react"
import { DivContainer, InfoContainer } from "./Info"

interface InfoProps {
  tasks: string[]
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
        <span></span>
      </DivContainer>
    </InfoContainer>
  )
}