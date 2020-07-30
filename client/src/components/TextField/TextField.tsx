import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import TextFieldStyle from './style'

type TextFieldProps = {
  className?: string
  name: string
  placeholder?: string
}

const TextFieldComponent: React.FC<TextFieldProps> = ({
  name,
  className,
  placeholder,
}) => {
  const [field, meta] = useField(name)
  const { value, ...restField } = field
  return (
    <>
      <div className={className}>
        <input
          type="text"
          value={value || undefined}
          placeholder={placeholder}
          {...restField}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const StyledTextField = styled(TextFieldComponent)`
  ${TextFieldStyle}
`

export default StyledTextField
