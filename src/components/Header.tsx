import React from 'react'
import image from '../assets/Logo.svg' 
import { HeaderContainer, ImgContainer } from './Header'


export function Header() {
  return(
    <>
      <HeaderContainer>
        <ImgContainer>
          <img src={image} alt='' />
        </ImgContainer>
      </HeaderContainer>
    </>
  )
}