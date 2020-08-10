import React, { useEffect, useContext } from 'react'
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
import { getPagesData, updatePageData, addPageData } from './apis'
import StorageContext from './contexts/StorageContext'
import { STORAGE } from './utils/constants';


export default function Routes() {
    const { counters, setCounter, getCounter, increment, setCounters, addCounter } = useCounter()
    const { storage } = useContext(StorageContext)

    async function getSetData() {
        const { data } = await getPagesData()
        setCounters(data.data)
    }

    async function updateSetPageData(id, path, page) {
        await updatePageData(id, page)
        setCounter(path, page.value)
    }

    async function addSetPageData(page) {
        const { data } = await addPageData(page)
        addCounter(data.data)
    }

    async function addUpdateData(path) {
        if (storage === STORAGE.LOCAL) {
            increment(path)
        } else if (storage === STORAGE.MONGO) {
            const counter = getCounter(path)
            if (counter._id) {
                updateSetPageData(counter._id, path, { value: counter.value + 1 })
            } else {
                addSetPageData({ path, value: 1 })
            }
        }
    }

    
    useEffect(() => {
        if (storage === STORAGE.MONGO) {
            getSetData();
        }
    }, [])

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
                    setCounter,
                    getCounter,
                    addUpdateData,
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
