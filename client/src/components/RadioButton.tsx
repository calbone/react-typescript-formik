import * as React from 'react'
import styled from 'styled-components'

type RadioButtonProps = {
  className?: string
  name: string
  value: string
  label?: string
  defaultChecked?: boolean
}
const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  className,
  label,
  name,
  value,
  defaultChecked
}) => {
  return (
    <div className={className}>
      <input
        type="radio"
        name={name}
        id={value}
        className="input"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value} className="label">
        {label}
      </label>
    </div>
  )
}

const RadioButton = styled(RadioButtonComponent)`
  display: flex;
  flex-wrap: wrap;
  margin-right: 24px;
  margin-bottom: 16px;
  .input {
    display: none;
    &:disabled + .label {
      color: #b9b9b9;
      cursor: not-allowed;
      &::before {
        border-color: #b9b9b9;
        background-color: #f2f2f2;
      }
    }
    &:checked + .label {
      &::before {
        border-color: #ff8e00;
      }
      &::after {
        background-color: #ff8e00;
      }
    }
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
      content: '';
    }
    &::after {
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: transparent;
      content: '';
    }
  }
`

export default RadioButton
