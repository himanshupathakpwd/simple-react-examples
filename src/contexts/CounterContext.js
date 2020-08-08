import { createContext } from 'react';

const CounterContext = createContext({});

export const CounterProvider = CounterContext.Provider;

export default CounterContext;
