import React, { Fragment, useContext } from 'react'

import { STORAGE } from '../utils/constants';
import StorageContext from '../contexts/StorageContext';

export default function StorageToggler() {
    const { storage, setStorage } = useContext(StorageContext)
    return <Fragment>
        <h3>Using Storage: {storage} </h3>
        {Object.keys(STORAGE).map((item, key) => {
            return <Fragment key={key}>
                <div>
                    <label>
                        <input
                            type='radio'
                            name="storage"
                            checked={item === storage}
                            onChange={() => setStorage(item)}
                            /> {item}
                    </label>
                </div>
            </Fragment>
        })}
    </Fragment>
}