import React from 'react';
import MySelf from '../Myself/MySelf';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <MySelf></MySelf>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;