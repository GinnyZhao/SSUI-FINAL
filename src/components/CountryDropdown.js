import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom';
import "./CountryDropdown.css";
import Delete from "../img/delete.png";

const CountryDropdown = (props) => {

    const countries = useSelector(state => state.countries)
    const collection = useSelector(state => state.collection)
    const dispatch = useDispatch()
    let display = true;


// Fetch specific country covid data based on user's choice in the select option
    const fetchCountry = (event) => {
        const [slug, country, ISO2] = event.target.value.split(",") 

        async function fetchData() {

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            const response = await fetch(`https://api.covid19api.com/total/country/` + slug, requestOptions)

            const data = await response.json()
            const parsedData = data.filter(day => day.Confirmed > 0)

            dispatch( { type: 'addCountryData', payload: { [country]: parsedData }} )
            dispatch( { type: 'addCountryToCollection', payload: {slug, country, ISO2}} )
        }
        fetchData();
    }

    const invalid = () => collection.length === 0

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">

                <h6 className="instruction"> Select country to display: </h6>

                <select class="dropdown" onChange={event => fetchCountry(event)}>
                
                    <option placeholder="Countries"> Countries </option>
                    {countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map(country => (
                        <option
                            id={country.Slug}
                            key={country.Slug}
                            value={[country.Slug, country.Country, country.ISO2]}
                        >
                        {country.Country}
                        </option> 
                    ))}
                </select>

                <NavLink to='/collection'>
                    <button className="dark" disabled={invalid()}>View side-by-side plot</button>
                </NavLink>
                
                <NavLink to="/overlay">
                    <button className="dark" disabled={invalid()}> View overlay plot </button>
                </NavLink>
                {/* <button className="dark" disabled={invalid()} onClick={() => {display = false}}> Reset </button> */}
            </div>

            <div className="col-sm-12 col-md-6 col-lg-9">
                <div className="countries">
                {collection.map( (country, index) => {
                    const flagUrl = `https://disease.sh/assets/img/flags/${country.ISO2.toLowerCase()}.png`
                    // const flagUrl = `https://www.countryflags.io/${country.ISO2.toLowerCase()}/flat/64.png`
                    // const flagUrl = `https://flagcdn.com/256x192/${country.ISO2.toLowerCase()}.png`
                    const worldUrl = `https://freesvg.org/img/Globe-Icon-Umber.png`

                    return (

                            <div className={display ? "country" : "none"}>
                                <img className="flag" key={country.slug} src={flagUrl} onError={(e)=>{ 
                                    if (e.target.src !== worldUrl) {
                                        e.target.src=worldUrl;}
                                    }}/>
                                <h5 className="countryName">{country.country}</h5>
                                {/* <button className="delete" onClick={() => {collection.splice(index, 1)}}> Delete </button> */}
                            </div>
                    )
                })}
                </div>
            </div>

            </div>

    )
}

export default CountryDropdown


