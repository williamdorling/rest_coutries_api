import { useState } from "react";

const Country = ({country, markCountryAsVisited}) => {

    // let visited = false;
    
    const handleMarkAsVisited = (e) => {
        markCountryAsVisited(country);
    }
    
    return ( 
        <>
            <h2>{country.name.common + country.flag}</h2>
            <p>population: {country.population}</p>
            <p>Capital:  {country.capital}</p>
            <input 
                onChange={handleMarkAsVisited}
                type="checkbox" 
                id="visited" 
                name="visited" 
                />
            <label  for="visited">Visited</label>
        </>
     );
}
 
export default Country;