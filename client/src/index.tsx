import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ThemeProvider } from 'styled-components'
import { all } from 'redux-saga/effects'
import { themes } from './constants/themes'
import GlobalStyle from './components/GlobalStyle'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
// reducer
import { questionnaires } from 'stores/domain/form/questionnaires'
import { answerSummary } from 'stores/domain/form/answerSummary'

// saga
import { questionnairesSagas } from 'stores/domain/form/questionnaires'
import { answerSummarySagas } from 'stores/domain/form/answerSummary'

const sagaMiddleware = createSagaMiddleware()

const composeReduxDevToolsEnhancers = composeWithDevTools({
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: true, // persist states on page reloading
    export: true, // export history of actions in a file
    import: 'custom', // import history of actions from a file
    jump: false, // jump back and forth (time travelling)
    skip: true, // skip (cancel) actions
    reorder: true, // drag and drop actions in the history list
    dispatch: true, // dispatch custom actions or action creators
    test: true, // generate tests for the selected actions
  },
  // other options like actionSanitizer, stateSanitizer
})

const rootReducer = () =>
  combineReducers({
    questionnaires,
    answerSummary,
  })

function* rootSaga() {
  yield all([questionnairesSagas(), answerSummarySagas()])
}

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
