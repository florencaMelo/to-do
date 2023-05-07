import React from "react"
import { DivContainer, InfoContainer } from "./Info"

export function Info() {
  return(
    <InfoContainer>
      <DivContainer>
        <p>Tarefas criadas</p>
        <span>0</span>
      </DivContainer>
      <DivContainer>
        <p>Concluídas</p>
        <span>0</span>
      </DivContainer>
    </InfoContainer>
  )
}