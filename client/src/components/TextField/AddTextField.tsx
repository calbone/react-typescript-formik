import * as React from 'react'
import styled from 'styled-components'
import TextFieldStyle from './style'

type AddTextFieldProps = {
  name?: string
  placeholder?: string
}

const AddTextField: React.FC<AddTextFieldProps> = ({ name, placeholder }) => {
  return <StyledTextField name={name} placeholder={placeholder} />
}

const StyledTextField = styled.input.attrs(({ name, placeholder }) => ({
  type: 'type',
  name,
  placeholder
}))`
  ${TextFieldStyle}
  width: 95%;
`

export default AddTextField
