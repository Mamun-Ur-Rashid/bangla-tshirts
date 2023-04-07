import React from 'react';

const Cart = ({cart, handleRemove}) => {
    // console.log(cart)
    let message;
    if(cart.length === 0){
        message = <p>Please add some products!!</p>
    }
    return (
        <div className='p-4 text-center'>
            <h1>Order Summary: {cart.length}</h1>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id} >
                {tshirt.name} 
                <button onClick={() => handleRemove(tshirt._id)} className='ml-2 border-2 rounded p-1 bg-red-500 border-blue-400'> X</button></p>)
            }
        </div>
    );
};

export default Cart;