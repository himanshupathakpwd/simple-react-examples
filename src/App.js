import React, { Fragment, useState } from 'react'

import Routes from './Routes';
import { StorageProvider } from './contexts/StorageContext';
import { STORAGE } from './utils/constants';


export default function App() {
  const [storage, setStorage] = useState(STORAGE.MONGO);
  return (
    <Fragment>
      <StorageProvider value={{
        storage,
        setStorage,
      }}>
        <Routes />
      </StorageProvider>
    </Fragment>
  )
}
