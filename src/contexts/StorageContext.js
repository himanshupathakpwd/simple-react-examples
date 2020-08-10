import { createContext } from 'react';

const StorageContext = createContext({});

export const StorageProvider = StorageContext.Provider;

export default StorageContext;
