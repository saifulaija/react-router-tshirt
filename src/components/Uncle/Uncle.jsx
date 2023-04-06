import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const[money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p>Grandpa Money = {money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Sent 1000 tk</button>
           <section className='flex'>
           <Cousin>Nabil</Cousin>
            <Cousin>Nabila</Cousin>
           </section>
        </div>
    );
};

export default Uncle;