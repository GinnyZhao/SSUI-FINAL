import { max, scaleBand, scaleLinear, axisBottom, axisLeft, select } from 'd3';
import { line, curveMonotoneX } from 'd3-shape';
import { color } from './Color'

const DrawBar = (countryName, totalCases, dailyData, id, caseType) => {
    console.log(dailyData)

    caseType ? caseType = caseType : caseType = "total"

    // captilize the first character
    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // setting up constants for sizes
    const width = 960
    const height = 500
    const padding = .2
    const margin = ({top: 80, right: 0, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const vizName = "viz" + id

    // setting constants for text labels and title
    const xAxisLabel = "Number of Days"
    const yAxisLabel = caseType ? `Number of Cases: ${capFirst(caseType)}` : "Number of Cases"
    const title = countryName
    const subtitle = () => {
        let title = ""
        if (caseType==="deaths") {
            title = `${max(dailyData, d => d[`${caseType}`])} COVID-19 deaths`
        }
        else if (caseType === "daily_deaths") {
            title = `At most ${max(dailyData, d => d[`${caseType}`])} COVID-19 daily deaths`
            
        }
        else if (caseType === "daily") {
            title = `At most ${max(dailyData, d => d[`${caseType}`])} COVID-19 daily confirmed cases`
        }
        else {
            title = `${max(dailyData, d => d[`${caseType}`])} COVID-19 ${caseType} cases`
        }
        return `${title} since ${dailyData[0].date.toLocaleDateString()}`
    }

    const xScale = scaleBand()
        .domain(dailyData.map(d => d.dayCount))
        .range([margin.left, width - margin.right])
        .padding(padding)

    const yScale = scaleLinear()
        .domain([0, max(dailyData, d => d[`${caseType}`])])
        .range([height - margin.bottom, margin.top])

    const lineGenerator = line()
      .x(d =>  xScale(d.dayCount))
      .y(d =>  yScale(d[`${caseType}`]))
      .curve(curveMonotoneX);

    const xAxis = (g) => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(axisBottom(xScale)
        .tickValues(xScale.domain().filter(function(d,i){ return !(((i+1)%10))})))


        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.dayCount))
    }

    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(yScale).ticks(null, dailyData.format).tickSize(-innerWidth))
            
            .call(g => g.select(".domain").remove())

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.total))
    }


    // setting up svg element on card
    const svg = select(`.${vizName}`)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMid meet")
        .attr("viewBox", [0, 0, width, height])

    // const g = svg.append("g")
    //     .attr("fill", color(caseType))
    //     .selectAll('rect')
    //     .data(dailyData)
    //     .join("rect")
    //     .attr('x', d => xScale(d.dayCount))

    //     .attr("y", d => yScale(d[`${caseType}`]))
    //     .attr("width", xScale.bandwidth())
    //     .attr("height", d => yScale(0) - yScale(d[`${caseType}`]))
    //     .attr("class", "bar")
    //     .on('mouseover', tip.show)
    //     .on('mouseout', tip.hide)

    

    const g = svg.append('path')
        .attr("fill", "none")
        .datum(dailyData)
        .attr('stroke', color(caseType))
        .attr('stroke-width', 2)
        .attr('class', 'line') 
        .attr('d', lineGenerator)

    const xAxisG = svg.append('g')
        .call(xAxis)
        
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 45)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel)

    const yAxisG = svg.append('g')
        .call(yAxis)
        
    yAxisG.select('.domain').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -height / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);



    const titleG = svg.append("g")

    titleG.append('text')
        .attr('class', 'title')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text(title);

    titleG.append('text')
        .attr('class', 'subtitle')
        .attr('x', width / 2)
        .attr('y', 70)
        .attr('text-anchor', 'middle')
        .text(subtitle());
}




export default DrawBar