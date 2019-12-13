import * as React from 'react'
import styled from 'styled-components'
import TextFieldStyle from './style'

type TextFieldProps = {
  name?: string
  placeholder?: string
}

const TextField: React.FC<TextFieldProps> = ({ name, placeholder }) => {
  return <StyledTextField name={name} placeholder={placeholder} />
}

const StyledTextField = styled.input.attrs(({ name, placeholder }) => ({
  type: 'type',
  name,
  placeholder
}))`
  ${TextFieldStyle}
`

export default TextField
