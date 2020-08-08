import { useState } from 'react'

export function useCounter() {
    const [counters, setCounters] = useState([
        {
            path: '/',
            value: 0,
        },
        {
            path: '/about',
            value: 1,
        },
        {
            path: '/users',
            value: 2,
        }
    ])

    function setCounter(path, value) {
        setCounters(prevCount => prevCount.map((item, pos) => {
            if (item.path === path) {
                return { ...item, value };
            }
            return item;
        }))
    }

    function getCounter(path) {
        return counters[counters.findIndex(item => item.path === path)];
    }

    function increment(path, value = 1) {
        const { value: prevVal } = counters.find(item => item.path === path)
        setCounter(path, prevVal + value);
    }

    return { counters, setCounter, getCounter, setCounters, increment }
}
