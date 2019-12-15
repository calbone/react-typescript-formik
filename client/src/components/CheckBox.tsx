import React, { useState } from 'react'
import styled from 'styled-components'

type CheckBoxProps = {
  className?: string
  name?: string
  label?: string
}
const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  className,
  name,
  label
}) => {
  const [checked, setChecked] = useState(false)
  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <div className={className}>
      <div className="item">
        <input
          type="checkbox"
          name={name}
          id={name}
          className="input"
          checked={checked}
          onChange={handleChangeChecked}
        />
        <label htmlFor={name} className="label">
          {label}
        </label>
      </div>
    </div>
  )
}

const CheckBox = styled(CheckBoxComponent)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -16px;
  .item {
    margin-right: 24px;
    margin-bottom: 16px;
  }
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
        background-color: #ff8e00;
      }
      &::after {
        border-color: #fff;
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
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #818181;
      border-radius: 4px;
      background-color: #fff;
      content: '';
      transition: 0.2s;
    }
    &::after {
      position: absolute;
      top: 6px;
      left: 5px;
      transform: rotate(-45deg);
      width: 10px;
      height: 6px;
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      content: '';
    }
  }
`

export default CheckBox
