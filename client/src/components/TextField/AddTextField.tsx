import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import TextFieldStyle from './style'

type AddTextFieldProps = {
  name: string
  placeholder?: string
}

const AddTextField: React.FC<AddTextFieldProps> = ({
  name,
  placeholder,
  ...restProps
}) => {
  const [field] = useField(name)
  return <StyledTextField {...field} {...restProps} placeholder={placeholder} />
}

const StyledTextField = styled.input.attrs(({ name, placeholder }) => ({
  type: 'type',
  name,
  placeholder,
}))`
  ${TextFieldStyle}
  width: 95%;
`

export default AddTextField
