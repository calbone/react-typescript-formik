import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

type ToggleButtonProps = {
  labelOn: string
  labelOff: string
  name: string
  className?: string
}

const ToggleButtonComponent: React.FC<ToggleButtonProps> = ({
  className,
  labelOn,
  labelOff,
  name,
}) => {
  const [field] = useField(name)
  return (
    <div className={className}>
      <input type="checkbox" className="input" id={name} {...field} />
      <label
        htmlFor={name}
        className="label"
        data-true-text={labelOn}
        data-false-text={labelOff}
      />
    </div>
  )
}

const ToggleButton = styled(ToggleButtonComponent)`
  position: relative;
  line-height: 1;
  .input {
    display: none;
    &:checked {
      + .label {
        padding: 0 28px 0 8px;
        background-color: ${({ theme }) => theme.colors.accentA};
        &::before {
          content: attr(data-true-text);
        }
        &::after {
          left: calc(100% - 24px - 4px);
        }
      }
    }
  }
  .label {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 32px;
    padding: 0 8px 0 28px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.mainD};
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.3s;
    &::before {
      content: attr(data-false-text);
    }
    &::after {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.baseC};
      content: '';
      transition: 0.3s;
    }
  }
`

export default ToggleButton
