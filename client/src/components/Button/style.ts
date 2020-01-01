import { css } from 'styled-components'

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 240px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.accentA};
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #e67e00;
  }
`
export default ButtonStyle
