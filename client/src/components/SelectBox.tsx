import * as React from 'react'
import styled from 'styled-components'

type item = {
  label: string
  value: string
}

type SelectBoxProps = {
  items: item[]
  className?: string
}

const SelectBoxComponent: React.FC<SelectBoxProps> = ({ className, items }) => {
  return (
    <div className={className}>
      <select>
        <option value="">選択してください</option>
        {items.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
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
    border-color: #818181 transparent transparent;
    pointer-events: none;
    content: '';
  }
  select {
    width: 100%;
    padding: 8px 56px 8px 14px;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
    background-color: #fff;
    line-height: 1.714;
  }
`
export default SelectBox
