import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import { useCounter } from './hooks/useCounter'
import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'
import { CounterProvider } from './contexts/CounterContext'


export default function App() {
  const { counters, setCounter, getCounter, increment } = useCounter();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <CounterProvider value={{
          counters,
          setCounter,
          getCounter,
          increment,
        }}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </CounterProvider>
      </div>
    </Router>
  )
}
