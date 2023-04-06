import React from "react";
import './Cart.css'
const Cart = ({ cart, removeHandleFromCart }) => {
  // conditional rendering
  let message;

  if (cart.length == 0) {
    message = <p>Please Add Some Products</p>;
  } else {
    message = <p>Thanks for Buying</p>;
  }

  return (
    <div>
      <h2 className={cart.length==1? 'red' : 'blue'}>Order Summary : {cart.length}</h2>

       <p className={`bold ${cart.length === 3? 'yellow' : 'purple'}`}>SOMETHING</p>
        {/* conditional rendering using ternary operator */}
      {cart.length > 2 ? <span> Buying More</span> : <span>Fokira marka</span>}

      {message}

      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => removeHandleFromCart(tshirt._id)}>X</button>
        </p>
      ))}

      {/* Logitical Operator */}
      {
        cart.length===2 && <p>You are winner</p>
      }
        {/* or logical operator */}
      {
        cart.length === 3 || <h2> 3 ta hoy lona  brothers</h2>
      }
    </div>
  );
};

export default Cart;
