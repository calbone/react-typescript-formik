import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormList from './containers/FormList'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
