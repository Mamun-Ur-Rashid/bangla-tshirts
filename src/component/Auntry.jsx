import React from 'react';
import Cusin from './Cusin';

const Auntry = () => {
    return (
        <div className='border-2 border-blue-500 p-3 '>
            <h1>Aunty</h1>
            <section className='flex gap-3 my-3'>
                <Cusin>Anika</Cusin>
                <Cusin>Anna</Cusin>
            </section>
        </div>
    );
};

export default Auntry;