import * as React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  className?: string
  width?: number
  label: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ className, label }) => {
  return <div className={className}>{label}</div>
}

const Button = styled(ButtonComponent)`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  width: ${props => props.width}px;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.baseC};
  }
`

export default Button
