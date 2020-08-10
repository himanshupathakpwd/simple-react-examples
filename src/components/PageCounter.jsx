import React, { Fragment, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'

import CounterContext from '../contexts/CounterContext'

export default function PageCounter() {
  const { path } = useRouteMatch()
  const { getCounter } = useContext(CounterContext)
  const { value: counter } = getCounter(path);
  return (
    <Fragment>
      <h4>Page Views: {counter}</h4>
      {/* <button onClick={() => setCounter(path, 0)}>Reset</button> */}
    </Fragment>
  )
}
