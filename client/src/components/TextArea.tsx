import * as React from 'react'
import styled from 'styled-components'

type TextAreaProps = {
  className?: string
  label?: string
  rows?: number
}

const TextAreaComponent: React.FC<TextAreaProps> = ({
  className,
  label,
  rows
}) => {
  return <textarea className={className} placeholder={label} rows={rows} />
}

const TextArea = styled(TextAreaComponent)`
  position: relative;
  width: 100%;
  padding: 8px 14px;
  border: 1px solid #b9b9b9;
  border-radius: 4px;
  background-color: #fff;
  line-height: 1.714;
  resize: none;
`

export default TextArea
