import React from "react"
import { TarefasContainer } from "./Tarefas"
import Image from '../assets/Clipboard.svg'

export function Tarefas() {
  return(
    <TarefasContainer >
      <img src={Image} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie taerfas e organize seus itens a fazer</p>
    </TarefasContainer >
  )
}