import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './stores/domain/form/reducers'
import rootSaga from './stores/domain/form/sagas'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare var window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer(),
  composeReduxDevToolsEnhancers(applyMiddleware(sagaMiddleware))
)

const GlobalStyle = createGlobalStyle`
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
    background-color: #f2f2f2;
    color: #111;
    font-size: 14px;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "palt";
  }
  a {
    color: #f2f2f2;
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
    margin-top: 16;
  }
`

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
