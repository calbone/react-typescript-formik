import * as React from 'react'
import styled from '@emotion/styled'

type FormLabelProps = {
  title: string
  className?: string
  require?: boolean
}

const FormLabelComponent: React.FC<FormLabelProps> = ({
  className,
  title,
  require
}) => {
  return (
    <legend className={className}>
      {title}
      {require && <span className="require">*</span>}
    </legend>
  )
}

const FormLabel = styled(FormLabelComponent)`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 12px;
  .require {
    margin-left: 0.5em;
    color: #fb311a;
  }
`

export default FormLabel
