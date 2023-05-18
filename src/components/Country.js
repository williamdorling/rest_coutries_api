
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
                onChange={handleCheckVisited}
                type="checkbox" 
                id="visited" 
                name="visited" 
                />
            <label  htmlFor="visited">Visited</label>
        </>
     );
}
 
export default Country;