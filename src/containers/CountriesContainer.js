import { useEffect, useState } from "react";
import Country from "../components/Country";
import VisitedCountry from "../components/VisitedCountry";


const CountriesContainer = ({}) => {
    
    const[countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    const checkVisitedBox = (country) =>{
        country.visited = !country.visited;
        setVisitedCountries(countries.filter(country => country.visited));
    }
    
    const countryComponents = countries.map(country => <Country country={country} checkVisitedBox = {checkVisitedBox}/>);

    const visitedCountryComponents = visitedCountries.map(country => <VisitedCountry country={country}/>);

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