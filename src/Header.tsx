import React from 'react'
import image from './assets/Logo.svg' 
import { HeaderContainer } from './header'

export function Header() {
  return(
    <HeaderContainer>
      <img src={image} alt='' />
    </HeaderContainer>
  )
}