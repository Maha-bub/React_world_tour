import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    console.log(country)
    const { name, flags, population, area } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited && "visited-country"}`}>
            <h2>Name:{name}</h2>


            <img src={flags?.svg} alt={name?.common} />
            <h3>Population:{population}</h3>
            <p>Area:{area}</p>
            <button onClick={() => { handleVisitedCountry(country) }}>Mark as Visited</button>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>

        </div>
    );
};

export default Country;