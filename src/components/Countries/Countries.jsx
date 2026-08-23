import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://countries.dev/countries')
            .then(response => response.json())
            .then(data => console.log(data));

    }, [])

    return (
        <div>
            <h3>Countries:</h3>
        </div>
    );
};

export default Countries;