import { css } from 'styled-components'

const TextFieldStyle = css`
  position: relative;
  width: 100%;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.mainD};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.baseC};
  line-height: 1.714;
  resize: none;
`

export default TextFieldStyle
