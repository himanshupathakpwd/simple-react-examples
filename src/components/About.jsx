import React, { Fragment, useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import CounterContext from '../contexts/CounterContext'
import PageCounter from './PageCounter'

export default function About() {
    const { path } = useRouteMatch()
    const { addUpdateData } = useContext(CounterContext)
    
    useEffect(() => {
        addUpdateData(path)
    }, [])

    return (
        <Fragment>
            <h2>About</h2>
            <PageCounter />
        </Fragment>
    )
}
