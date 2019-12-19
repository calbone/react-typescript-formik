import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ThemeProvider } from 'styled-components'
import rootReducer from './stores/domain/form/reducers'
import rootSaga from './stores/domain/form/sagas'
import { themes } from './constants/themes'
import GlobalStyle from './components/GlobalStyle'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare const window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer(),
  composeReduxDevToolsEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
