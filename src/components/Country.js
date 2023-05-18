
const Country = ({country, markCountryAsVisited}) => {

    const handleMarkAsVisited = (e) => {
        markCountryAsVisited(country);
    }
    
    return ( 
        <>
            <h2>{country.name.common + country.flag}</h2>
            <p>population: {country.population}</p>
            <p>Capital:  {country.capital}</p>
            <input 
                onClick={handleMarkAsVisited}
                type="button" 
                id="visited" 
                name="visited" 
                />
            <label  for="visited">Visited</label>
        </>
     );
}
 
export default Country;