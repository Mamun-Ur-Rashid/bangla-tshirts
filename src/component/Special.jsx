import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div className='border-2 border-blue-500 p-3'>
            <h1>Special</h1>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Special;