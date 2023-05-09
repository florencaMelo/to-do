import React from "react"
import { TarefasContainer } from "./Tarefas"
import Image from '../assets/Clipboard.svg'
import { useState } from "react";


export function Tarefas() {

  return(
    <TarefasContainer >
      <img src={Image} alt="" />
      <b>Você ainda não tem tarefas cadastradas</b>
      <p>Crie taerfas e organize seus itens a fazer</p>
    </TarefasContainer >
  )
}