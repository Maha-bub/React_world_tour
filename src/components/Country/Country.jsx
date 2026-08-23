import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population } = country;
    return (
        <div className='country'>
            <h2>Name:{name}</h2>
            <h2>Population:{population}</h2>
            <img src={flags?.svg} alt={name?.common} />
        </div>
    );
};

export default Country;