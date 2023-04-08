import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div
        className='border-2 border-blue-500 p-3'>
            <h1>Brother</h1>
            <h2><small>Grandpa Money: {money}</small></h2>
        </div>
    );
};

export default Brother;