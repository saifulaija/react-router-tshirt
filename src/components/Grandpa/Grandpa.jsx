import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import Uncle from "../Uncle/Uncle";

export  const RingContext = createContext("gold");
export const MoneyContext = createContext(0)

const Grandpa = () => {
  const ring = "Diamond";
  const [money, setMoney]=useState(0)
 
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money : {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>

      <RingContext.Provider value ='golden ring'>
        <section className="flex">
          <Father></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </RingContext.Provider>


      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
