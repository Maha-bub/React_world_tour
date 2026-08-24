import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://countries.dev/countries')
            .then(response => response.json())
            .then(data => setCountries(data));

    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your visited list!')
        console.log(country)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Country:</h3>
                <ul>

                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.numericCode}
                            handleVisitedCountry={handleVisitedCountry}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;