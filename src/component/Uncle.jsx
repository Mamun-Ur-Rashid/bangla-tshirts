import React, { useContext } from 'react';
import Cusin from './Cusin';
import { MoneyContext } from './Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border-2 border-blue-500 p-3'>
            <h1>uncle</h1>
            <h2>Grandpa Money : {money}</h2>
            <button onClick={() => setMoney(money + 1000)} className='btn border-2 bg-blue-400 rounded p-2'>Send 1000Tk</button>
            <section className='flex gap-3 my-3'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;