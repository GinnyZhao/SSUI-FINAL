import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'
import { Loader } from '../components/Loader'
import { useDispatch } from "react-redux";
import { Instructions } from '../components/Instructions';

const New = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    // fetch basic country data including name, slug and code from Coronavirus COVID19 API
    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
            const response = await fetch("https://api.covid19api.com/countries", requestOptions)
            const data = await response.json()
            dispatch({ type: 'addCountries', payload: data })
            setIsLoading(false);
        }
        fetchData();
    }, []); 

    return (

        <div>
            <Instructions />

            {isLoading ? (
                < Loader />
            ) : (
                < CountryDropdown />
            )}
        </div>
    )
}

export default New