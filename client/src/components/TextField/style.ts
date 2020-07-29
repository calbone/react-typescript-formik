import { css } from 'styled-components'

const TextFieldStyle = css`
  position: relative;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.mainD};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.baseC};
  line-height: 1.714;
  resize: none;
  input {
    width: 100%;
  }
`

export default TextFieldStyle
