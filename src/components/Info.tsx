import React from "react"
import { DivContainer, InfoContainer } from "./Info"

export function Info({tasks}) {
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