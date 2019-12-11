import * as React from 'react'
import styled from '@emotion/styled'

type RadioButtonProps = {
  label: string
  name: string
  value?: string
  className?: string
}

const RadioComponent: React.FC<RadioButtonProps> = ({
  className,
  label,
  name,
  value
}) => {
  return (
    <div className={className}>
      <input
        type="radio"
        name={name}
        value={value}
        id={value}
        className="input"
      />
      <label htmlFor={value} className="label">
        {label}
      </label>
    </div>
  )
}

const RadioButton = styled(RadioComponent)`
  display: flex;
  flex-wrap: wrap;
  margin-right: 24px;
  margin-bottom: 16px;
  .input {
    display: none;
  }
  .label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.2s;
    &::before,
    &::after {
      position: absolute;
      border-radius: 50%;
      transition: 0.2s;
    }
    &::before {
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #818181;
      background-color: #fff;
      border-color: #ff8e00;
      content: '';
    }
    &::after {
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #ff8e00;
      content: '';
    }
  }
`

export default RadioButton
