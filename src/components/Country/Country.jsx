import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, area } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h2>Name:{name}</h2>
            <img src={flags?.svg} alt={name?.common} />
            <h3>Population:{population}</h3>
            <p>Area:{area}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>

        </div>
    );
};

export default Country;