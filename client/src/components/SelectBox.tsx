import * as React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

type item = {
  label: string
  value: string
}

type SelectBoxProps = {
  items: item[]
  className?: string
  name: string
}

const SelectBoxComponent: React.FC<SelectBoxProps> = ({
  className,
  items,
  name,
}) => {
  const [field, meta] = useField(name)
  return (
    <div className={className}>
      <select {...field}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const SelectBox = styled(SelectBoxComponent)`
  display: block;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.mainC} transparent transparent;
    pointer-events: none;
    content: '';
  }
  select {
    width: 100%;
    padding: 8px 56px 8px 14px;
    border: 1px solid ${({ theme }) => theme.colors.mainD};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.baseC};
    line-height: 1.714;
  }
`
export default SelectBox
