import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <NotFound />
  </Switch>
)

export default App
