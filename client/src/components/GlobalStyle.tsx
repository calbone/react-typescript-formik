import { createGlobalStyle } from 'styled-components'
import { theme } from '../constants/theme'

type ThemeType = typeof theme

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  body {
    background-color: ${({ theme }) => theme.colors.baseA};
    color: ${({ theme }) => theme.colors.mainA};
    font-size: 14px;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "palt";
  }
  a {
    color: ${({ theme }) => theme.colors.baseA};
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  button,
  textarea,
  select,
  fieldset,
  legend,
  [ type = "text" ],
  // [ type = "checkbox" ],
  // [ type = "radio" ],
  [ type = "button" ],
  [ type = "reset" ],
  [ type = "submit" ],
  [ type = "file" ] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
  }
  button {
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p + p {
    margin-top: ${({ theme }) => theme.margin * 2};
  }
`

export default GlobalStyle
