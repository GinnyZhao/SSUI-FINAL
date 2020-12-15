import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Country = ({caseType, country}) => {
    const collection = useSelector(state => state.collection)
    const countryName = Object.keys(country)[0]
    const dailyData = country[countryName]
    if (collection.find(obj => obj.country === countryName) != null) {
        const slug = collection.find(obj => obj.country === countryName).slug
        const totalCases = () => dailyData.length === 0 ? 0 : dailyData[dailyData.length-1].Confirmed
    
        const array = []
        const parseData = (data, array) => {
            data.forEach( (day, index) => {
                let newCases = 0;
                let newDeaths = 0;
                if (index === 0) {
                    newCases = 0;
                    newDeaths = 0;
                } else {
                    newCases = day.Confirmed - data[index-1].Confirmed;
                    newDeaths = day.Deaths - data[index-1].Deaths;

                }
                array.push({
                    dayCount: index + 1,
                    date: new Date(day.Date),
                    total: day.Confirmed, 
                    active: day.Active, 
                    recovered: day.Recovered, 
                    deaths: day.Deaths,
                    daily: newCases,
                    daily_deaths: newDeaths,
                })
            })
            return array
        }

        // console.log(parseData(dailyData, array))
    
        return (
            <NavLink to={{
                pathname: `/countries/${slug}`,
                slug,
                countryName
                }}>
                <Viz countryName={countryName} totalCases={totalCases()} dailyData={parseData(dailyData, array)} caseType={caseType} slug={slug}/>
            </NavLink>
        )
    }
}

export default Country

