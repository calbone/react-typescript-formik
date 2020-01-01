import * as React from 'react'
import styled from 'styled-components'
import ButtonStyle from './style'

type ButtonProps = {
  className?: string
  label: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ className, label }) => {
  return (
    <button type="submit" className={className}>
      {label}
    </button>
  )
}

const Button = styled(ButtonComponent)`
  ${ButtonStyle}
`

export default Button
