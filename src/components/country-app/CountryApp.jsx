import Countries from "./Countries";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SearchCountry from "./SearchCountry";

const url = "https://restcountries.com/v3.1/all"
const CountryApp = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [countries, setCountries] = useState([])
    const [filterCountries, setFilterCountries] = useState(countries)

    const fetchData = (async(url)=>{
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json()
            setCountries(data);
            setFilterCountries(data);
            setIsLoading(false);
            setError(null);
            // console.log(countries);
        } catch (error) {
            setIsLoading(false);
            setError(error);    
        }
    })
    useEffect(()=>{
        fetchData(url) 
    },[])

    const handleRemoveCountry = (name)=>{
        const filter = filterCountries.filter((country)=>country.name.common !== name);
        setFilterCountries(filter);
        toast.error(`Country ${name} has deleted`)
    }

    const searchHandle = (searchValue)=>{
        let value = searchValue.toLowerCase();
        const newCountry = countries.filter((country)=>{
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value)
        })

        setFilterCountries(newCountry);
    }

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="bg-white p-md-4 shadow text-secondary rounded-pill text-center mb-5">
                    <h1 className="mb-4">Country App</h1>
                    <SearchCountry onSearchValue={searchHandle} />
                </div>
                
                {isLoading && <h3>Country data is loading...</h3>}
                {error && <h5>{error.message}</h5>}
                
                {countries && <Countries countries={filterCountries} onRemoveCountry={handleRemoveCountry} />}
                <ToastContainer />
            </div>
        </div>
    );
};

export default CountryApp;