import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, addHandleToCart}) => {
    const {name, _id, picture,price} = tshirt;

    return (
        <div className='t-shirt'>
            <img src= {picture} alt="" />
            <p>{name}</p>
            <p>Price : ${price}</p>
            <button onClick={()=>addHandleToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;