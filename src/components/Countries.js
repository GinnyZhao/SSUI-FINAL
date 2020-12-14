import React from 'react';
import Visual from '../d3/Visual'
import { useSelector } from 'react-redux'

const Countries = ({caseType, countries}) => {
    const collection = useSelector(state => state.collection)
    const res =  []
    const slug_res = []
    const names = []


    countries.map((country, idx) => {
        const countryName = Object.keys(country)[0]
        const dailyData = country[countryName]       
        const slug = collection.find(obj => obj.country === countryName).slug

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
            console.log(array);
            return array
        }
        res.push(parseData(dailyData, array));
        slug_res.push(slug);
        names.push(countryName);
    })

    console.log(res)
    console.log(slug_res)

    return (
        <Visual names = {names} data = {res} caseType = {caseType} slugs = {slug_res}/>
    )

}

export default Countries

