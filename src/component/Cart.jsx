import React from 'react';

const Cart = ({cart, handleRemove}) => {
    // console.log(cart)
    let message;
    if(cart.length === 0){
        message = <p>Please add some products!!</p>
    }
    else{message = <div>
        <h3>Wow!!!</h3>
        <p>Thanks for giving your money!</p>
    </div>
    }
    return (
        <div className='p-4 text-center'>
            <h1>Order Summary: {cart.length}</h1>
            {
                cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id} >
                {tshirt.name} 
                <button onClick={() => handleRemove(tshirt._id)} className='ml-2 border-2 px-2  h-6  bg-red-500 border-blue-400'> X</button></p>)
            }
        </div>
    );
};

export default Cart;