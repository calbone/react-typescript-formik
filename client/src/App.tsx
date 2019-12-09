import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormList from './containers/FormList'
import FormEnquete from './containers/FormEnquete'
import './styles/app.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormList} />
        <Route exact path="/enquete" component={FormEnquete} />
        <Route exact path="/enquete/:id/edit" component={FormEnquete} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
