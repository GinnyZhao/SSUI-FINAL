// need to add loader logic
import data from '../components/data/data.json'

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Province from '../components/Province'
import State from '../components/State'
import Country from '../components/Country'

import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import { selectAll } from 'd3'
import { NavLink } from 'react-router-dom';



const Show = (props) => {
    // const cache = useSelector(state => state.cache)
    // const collection = useSelector(state => state.collection)
    console.log(props);
    const name = props.location.countryName;
    // let nameCap = name.charAt(0).toUpperCase() + name.slice(1)
    // if (nameCap === "United-states") {
    //     nameCap = "United States of America";
    // }
    // if (nameCap === "Korea-south") {
    //     nameCap = "Korea (South)"
    // }

    const countryData = useSelector(state => state.countryData)
    // let index = 0;
    // console.log(nameCap)
    // console.log(Object.keys(countryData[0])[0])

    let index = countryData.findIndex(obj => Object.keys(obj)[0] === name);
    console.log(index);

    const [caseType, setCaseType] = useState("");
        return (
            <div>
                <Row >
                    <Col xs="12" sm="6" md="4" lg="3" xl="3">
                        <div className="card button-col">
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="daily block" value="daily"> Daily Confirmed Cases </button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="daily_deaths block" value="daily_deaths"> Daily Deaths </button>
                        </div>
                        <NavLink to='/collection'>
                            <button className="dark" style={{"font-size": "16px"}}> Back to side-by-side View </button>
                        </NavLink>
                    </Col>

                    <Col sm="12" md="9" lg="9" xl="9">
                        <Card>
                            <NavLink to='/collection'>
                                <Country caseType={caseType} country={countryData[index]}/>
                                {/* <Province caseType={caseType} province={provincesData[0].Country} provinceData={provincesData}/>  */}
                            </NavLink>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

}

export default Show