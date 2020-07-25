import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import TextFieldStyle from './style'

type AddTextFieldProps = {
  className?: string
  name: string
  placeholder?: string
}

const AddTextFieldComponent: React.FC<AddTextFieldProps> = ({
  name,
  className,
  placeholder,
}) => {
  const [field] = useField(name)
  const { value, ...restField } = field
  return (
    <div className={className}>
      <input type="text" placeholder={placeholder} {...restField} />
    </div>
  )
}

const StyledAddTextField = styled(AddTextFieldComponent)`
  ${TextFieldStyle}
  width: 95%;
`

export default StyledAddTextField
