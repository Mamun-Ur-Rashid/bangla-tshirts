import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Sister = () => {
    const ring = useContext(RingContext);
    return (
        <div className='border-2 border-blue-500 p-3'>
            <h1>Sister</h1>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Sister;