import { useState } from 'react'

export function useCounter() {
    const [counters, setCounters] = useState([])
    
    function setCounter(path, value) {
        setCounters(prevCounts => {
            if (~prevCounts.findIndex(item => item.path === path)) {
                return prevCounts.map(item => {
                    if (item.path === path) {
                        return { ...item, value }
                    }
                    return item
                })
            }
            return [...prevCounts, { path, value }]
        })
    }

    function addCounter(data) {
        setCounters(prevCounts => [...prevCounts, data])
    }

    function getCounter(path) {
        const counter = counters.find(item => item.path === path)
        if (counter) {
            return counter;
        }
        return { path, value: 0 }
    }

    function increment(path, value = 1) {
        const { value: prevVal } = getCounter(path);
        setCounter(path, prevVal + value);
    }

    return { counters, setCounter, addCounter, getCounter, setCounters, increment }
}
