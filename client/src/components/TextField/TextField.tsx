import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import TextFieldStyle from './style'

type TextFieldProps = {
  name: string
  placeholder?: string
}

const TextField: React.FC<TextFieldProps> = ({ name, ...restProps }) => {
  const [field, meta] = useField(name)
  return (
    <>
      <StyledTextField {...field} {...restProps} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const StyledTextField = styled.input.attrs(({ name, placeholder }) => ({
  type: 'type',
  name,
  placeholder,
}))`
  ${TextFieldStyle}
`

export default TextField
