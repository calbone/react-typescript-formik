import * as React from 'react'
import styled from 'styled-components'

type PopMenuProps = {
  className?: string
  label: string
  menuList: string[]
}

const PopMenuComponent: React.FC<PopMenuProps> = ({
  className,
  label,
  menuList,
  children
}) => {
  return (
    <div className={className}>
      {children && <div className="icon">{children}</div>}
      {label}
      <ul className="popMenu__select">
        {menuList.map((menu, idx) => {
          return <li key={idx}>{menu}</li>
        })}

        {/* <li>
          <button>Shift-JIS</button>
        </li>
        <li>
          <button>UTF-8</button>
        </li> */}
      </ul>
    </div>
  )
}

const PopMenu = styled(PopMenuComponent)`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  position: relative;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.mainC};
    min-width: 16px;
  }
  &:hover {
    .popMenu__select {
      visibility: visible;
      opacity: 1;
      z-index: 1;
    }
  }
  .icon {
    padding-left: 24px;
    border-left: 1px solid $color-base-a;
    svg {
      margin-right: 8px;
    }
  }
  .popMenu__select {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    z-index: -1;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.baseC};
    white-space: nowrap;
    cursor: pointer;
    transition: 0.3s;
  }
  li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.baseA};
  }
  button {
    width: 100%;
    padding: 10px 65px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.5;
  }
`
export default PopMenu
