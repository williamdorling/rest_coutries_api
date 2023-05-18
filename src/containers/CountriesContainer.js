import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesContainer = ({}) => {
    
    const[countries, setCountries] = useState([]);
    // const[visited, setVisited] = useState(false);

    const fetchCountries = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    const markCountryAsVisited = (country) =>{
        country.visited = true;
    }
    
    const countryComponents = countries.map(country => <Country country={country} markCountryAsVisited = {markCountryAsVisited}/>);

    // useEffect(() => {
    //     setVisited(visited);
    // }, [visited])

    const visitedCountryComponents = countryComponents.filter(country => country.visited === true);

  
    
    
    return ( 
    <>
        <div id='countries'>
            <h2>Countries</h2>
            {countryComponents}
        </div>

        <div id='visited-countries'>
            <h2>Visited Coutries</h2>
            {visitedCountryComponents}
        </div> 
      </>
     );
}
 
export default CountriesContainer;