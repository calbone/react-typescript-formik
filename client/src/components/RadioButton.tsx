import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

type RadioButtonProps = {
  className?: string
  name: string
  value: string
  label?: string
}
const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  label,
  className,
  name,
  value,
}) => {
  const [field] = useField(name)
  return (
    <div className={className}>
      <input
        id={value}
        type="radio"
        className="input"
        {...field}
        value={value}
        checked={field.value === value}
      />
      <label htmlFor={value} className="label">
        {label}
      </label>
    </div>
  )
}

const StyledRadioButton = styled(RadioButtonComponent)`
  display: flex;
  flex-wrap: wrap;
  margin-right: 24px;
  margin-bottom: 16px;
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
      }
      &::after {
        background-color: ${({ theme }) => theme.colors.accentA};
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
      border: 2px solid ${({ theme }) => theme.colors.mainC};
      background-color: ${({ theme }) => theme.colors.baseC};
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

export default StyledRadioButton
