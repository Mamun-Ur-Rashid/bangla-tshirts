import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Father = () => {
    return (
        <div className='border-2 border-blue-500 p-3'>
            <h1>Father</h1>
            <section className='flex gap-3 my-3'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;