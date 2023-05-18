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


    const markCountryAsVisited = (country) =>{
        const index = countries.indexOf(country);

        const newCountry = {
            name: country.name,
            flag: country.flag,
            population: country.population,
            capital: country.capital,
            visited: true
        }

        // const updatedCountries = [...countries].splice(index,1);
        setCountries(countries.filter(oldCountry => oldCountry.name !==country.name))
        // setCountries([updatedCountries])
        setVisitedCountries([...visitedCountries, newCountry])
    }
    
    const countryComponents = countries.map(country => <Country country={country} markCountryAsVisited = {markCountryAsVisited}/>);

    // useEffect(() => {
    //     setVisited(visited);
    // }, [visited])

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