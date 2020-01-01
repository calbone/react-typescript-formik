import * as React from 'react'
import styled from 'styled-components'
import ButtonStyle from './style'

type ButtonProps = {
  className?: string
  valid?: boolean
  type?: 'button' | 'submit'
  label: string
}

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  valid,
  type,
  label
}) => {
  return (
    <button type={type} className={className} disabled={!valid}>
      {label}
    </button>
  )
}

ButtonComponent.defaultProps = {
  type: 'button'
}

const Button = styled(ButtonComponent)`
  ${ButtonStyle}
  background-color: ${props =>
    props.valid ? props.theme.colors.accentA : props.theme.colors.mainD};
  color: ${props =>
    props.valid ? props.theme.colors.baseC : props.theme.colors.mainC};
  cursor: ${props => (props.valid ? 'pointer' : 'not-allowed')};
  &:hover {
    background-color: ${props => (props.valid ? '#e67e00' : 'none')};
  }
`

export default Button
