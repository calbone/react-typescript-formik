import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

type CheckBoxProps = {
  className?: string
  name: string
  value: string
  label?: string
  defaultChecked?: boolean
}
const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  className,
  name,
  label,
  value,
  defaultChecked,
}) => {
  const [field] = useField(name)
  return (
    <div className={className}>
      <div className="item">
        <input
          type="checkbox"
          id={value}
          className="input"
          defaultChecked={defaultChecked}
          {...field}
        />
        <label htmlFor={value} className="label">
          {label}
        </label>
      </div>
    </div>
  )
}

const CheckBox = styled(CheckBoxComponent)`
  display: flex;
  flex-wrap: wrap;
  .input {
    display: none;
    &:disabled + .label {
      color: ${({ theme }) => theme.colors.mainD};
      cursor: not-allowed;
      &::before {
        border-color: ${({ theme }) => theme.colors.mainD};
        background-color: ${({ theme }) => theme.colors.baseA};
      }
    }
    &:checked + .label {
      &::before {
        border-color: ${({ theme }) => theme.colors.accentA};
        background-color: ${({ theme }) => theme.colors.accentA};
      }
      &::after {
        border-color: ${({ theme }) => theme.colors.baseC};
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
      border: 2px solid ${({ theme }) => theme.colors.mainC};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.baseC};
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
