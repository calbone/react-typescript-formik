import * as React from 'react'
import styled from '@emotion/styled'

type TextAreaProps = {
  className?: string
  label?: string
  rows?: number | 6
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
