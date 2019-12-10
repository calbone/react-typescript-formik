import * as React from 'react'
import styled from '@emotion/styled'

interface FieldInputTextProps {
  className?: string
  label?: string
}

const InputText: React.FC<FieldInputTextProps> = ({ className, label }) => {
  return <input type="text" className={className} placeholder={label} />
}

const FieldInputText = styled(InputText)`
  position: relative;
  width: 100%;
  padding: 8px 14px;
  border: 1px solid #b9b9b9;
  border-radius: 4px;
  background-color: #fff;
  line-height: 1.714;
  resize: none;
`

export default FieldInputText
