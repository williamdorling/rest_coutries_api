
const VisitedCountry = ({country}) => {
     
    return ( 
        <>
            <h3>{country.name.common + country.flag}</h3>
            <p>Population: {country.population}</p>
            <p>Capital:  {country.capital}</p>
        </>
     );
}
 
export default VisitedCountry;