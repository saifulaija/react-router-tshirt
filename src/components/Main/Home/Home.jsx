import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../../Tshirt/Tshirt";
import Cart from "../../Cart/Cart";
import './Home.css'
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const [cart, setCart] = useState([]);
  const tShirts = useLoaderData();


    const addHandleToCart = tshirt =>{
        const exist = cart.find(ts=> ts._id == tshirt._id);
        if(exist){
            toast('You have added t-shirt')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }

     
    }



    const removeHandleFromCart = id=>{
        
       const remaining = cart.filter(ts=> ts._id !== id);
       setCart(remaining)
    }



  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <Tshirt tshirt={tshirt} key={tshirt._id} addHandleToCart={addHandleToCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeHandleFromCart={removeHandleFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
