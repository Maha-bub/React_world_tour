import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);


    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);
    useEffect(() => {
        fetch('https://countries.dev/countries')
            .then(response => response.json())
            .then(data => setCountries(data));

    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your visited list!')
        const totalContries = [...visitedCountries, country]
        setVisitedCountries(totalContries);
        // console.log(totalContries)
    }

    const handleVisitedCountryFlags = Flags => {
        console.log('add this to your visited list!')
        const totalContriesFlags = [...visitedCountries, Flags]
        setVisitedCountries(totalContriesFlags);
        // console.log(totalContries)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Country:{visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => {
                            return <li>{country.name}</li>
                        })
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.numericCode}

                            handleVisitedCountryFlags={handleVisitedCountryFlags}
                            handleVisitedCountry={handleVisitedCountry}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;