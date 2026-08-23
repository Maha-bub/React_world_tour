import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className='country'>
            <h2>Name:{country.name}</h2>
            <h2>Population:{country.population}</h2>
            <h2>Flags:{country.flags.svg}</h2>
        </div>
    );
};

export default Country;