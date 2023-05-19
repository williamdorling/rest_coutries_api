
const Country = ({country, checkVisitedBox}) => {

    const handleCheckVisited = (e) => {
        checkVisitedBox(country);
    }
    
    return ( 
        <>
            <h3>{country.name.common + country.flag}</h3>
            <p>Population: {country.population}</p>
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