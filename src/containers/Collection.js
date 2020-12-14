import React, { useState } from 'react';
import { Redirect } from "react-router"
import Country from '../components/Country'
import { selectAll } from 'd3'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./Collection.css"


const Collection = () => {
    const countryData = useSelector(state => state.countryData)
    const [caseType, setCaseType] = useState("");

    if (countryData) {
        return (
            <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className='card button-col'>
                            <button autofocus onClick={event => (setCaseType(event.target.value), selectAll("svg").remove(), event.preventDefault())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="daily block" value="daily"> Daily Confirmed Cases </button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="daily_deaths block" value="daily_deaths"> Daily Deaths </button>
                        </div>
                        <NavLink to='/new'>
                            <button className="dark"> Back to Main </button>
                        </NavLink>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-9">
                        <div className="countries">
                            {countryData.map((country, index) => { 
                                return (
                                    <div className="country">
                                        <Country caseType={caseType} country={country}/>  
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>
        )
    } else {
        return <Redirect to='/' />

    }
}

export default Collection
