import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from './Cart';
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleCart = (tshirts) =>{
        const exists = cart.find(ts => ts._id === tshirts._id);
        if(exists){
            toast("You have all ready exists the shirt");
        }
        else{
            const newCart = [...cart, tshirts];
            setCart(newCart);
        }
        
    }

    const handleRemove = (id) => {
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id)
            setCart(remaining);
        
    }
    return (
        <div className='grid grid-cols-12 gap-4 my-9 mx-10'>
            <div className='tshirts-container col-span-8  grid grid-cols-3 gap-3'>
                {
                    tshirts.map(tshirt =>  <Tshirt key={tshirt._id}
                    tshirt={tshirt}
                    handleCart={handleCart}></Tshirt>)
                }
            </div>
            <div className="cart-container col-span-4 bg-blue-100">
                <Cart cart={cart}
                handleRemove={handleRemove}></Cart>
            </div>
        </div>
    );
};

export default Home;