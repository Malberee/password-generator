import React from 'react'
import { ContainerStyles } from './Container.styled'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

export default Container
