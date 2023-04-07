import React from 'react';
import { Link } from 'react-router-dom';

const Tshirt = ({ tshirt, handleCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className=''>
            <div className='border-2 border-orange-300 rounded-xl text-center'>
                <img className='h-60 p-5 ' src={picture} alt="" />
                <p>{name}</p>
                <p>Price: {price}</p>
                <Link><button onClick={() =>handleCart(tshirt)} className='bg-blue-400 border rounded-lg p-2 my-2 hover:bg-blue-700'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Tshirt;