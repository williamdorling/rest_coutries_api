
const Country = ({country, checkVisitedBox}) => {

    const handleCheckVisited = (e) => {
        checkVisitedBox(country);
    }
    
    return ( 
        <>
            <h2>{country.name.common + country.flag}</h2>
            <p>population: {country.population}</p>
            <p>Capital:  {country.capital}</p>
            <input 
                onClick={handleCheckVisited}
                type="checkbox" 
                id="visited" 
                name="visited" 
                />
            <label  for="visited">Visited</label>
        </>
     );
}
 
export default Country;