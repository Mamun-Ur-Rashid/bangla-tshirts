import React, { createContext, useState } from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Auntry from './Auntry';
export const RingContext = createContext('Golden');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const [money, setMoney] = useState(0);
    return (
        <div className='border-2 border-blue-500 text-center w-3/4 mx-auto my-10'>
            <h1>Grandpa</h1>
            <h2>Has Money :{money}</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <div className='flex gap-10 w-3/4 mx-auto my-4'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Auntry></Auntry>
                    </div>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;