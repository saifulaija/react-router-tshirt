import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h5>Sister</h5>
            <p>Grandpa Money : {money}</p>
        </div>
    );
};

export default Sister;