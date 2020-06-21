import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

type TextAreaProps = {
  className?: string
  label?: string
  rows?: number
  name: string
}

const TextAreaComponent: React.FC<TextAreaProps> = ({
  className,
  label,
  rows,
  name,
}) => {
  const [field] = useField(name)
  return (
    <textarea
      className={className}
      placeholder={label}
      rows={rows}
      {...field}
    />
  )
}

const TextArea = styled(TextAreaComponent)`
  position: relative;
  width: 100%;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.mainD};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.baseC};
  line-height: 1.714;
  resize: none;
`

export default TextArea
