import { max, scaleBand, scaleLinear, axisBottom, axisLeft, select } from 'd3';
import { line, curveMonotoneX } from 'd3-shape';
import { color } from './Color'
import "./DrawLine.css"




const DrawLine = (names, data, slugs, caseType) => {
    console.log(names)
    console.log(data)
    console.log(slugs)
    caseType ? caseType = caseType : caseType = "total";
    const width = 960
    const height = 500
    const padding = .2
    const margin = ({top: 80, right: 80, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const vizName = "viz"


    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const xAxisLabel = "Number of Days"
    const yAxisLabel = caseType ? `Number of Cases: ${capFirst(caseType)}` : "Number of Cases"
    const title = "COVID-19 Cases"

    let l =[] 
    data.map((d,idx) => {
        l.push(d.length)
    })

    const i = l.indexOf(Math.max.apply(Math, l))
    // console.log(l)
    // console.log(i)

    console.log(data[i])

    const xScale = scaleBand()
        .domain(data[i].map(d => d.dayCount))
        .range([margin.left, width - margin.right])
        .padding(padding)
    
    let l2 = []
    let m = 0
    data.map((dat,idx) =>  {
        m = max(dat, d => d[`${caseType}`])
        l2.push(m)
    })
    console.log(l2)
    const largest = Math.max.apply(Math, l2)
    console.log(largest)


    const yScale = scaleLinear()
        .domain([0, largest])
        .range([height - margin.bottom, margin.top])


    const svg = select(`.${vizName}`)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMid meet")
    .attr("viewBox", [0, 0, width, height])

    data.map((dat, idx) => {
        console.log(dat[dat.length-1])
        console.log(dat[dat.length-1][caseType])
        const lineGenerator = line()
        .x(d =>  xScale(d.dayCount))
        .y(d =>  yScale(d[`${caseType}`]))
        .curve(curveMonotoneX);

        const s = svg.append('path')
        .attr("fill", "none")
        .datum(dat)
        // .attr('stroke', `#${((1<<24)*Math.random()|0).toString(16)}`)
        .attr('stroke', color(caseType))

        .attr("class", `line country${(idx + 1).toString()}`)
        .attr('stroke-width', 2)
        .attr('class', 'line') 
        .attr('d', lineGenerator)

        const t = svg.append('text')
        .text(names[idx])
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .attr("transform", `translate(${width - 100}, ${yScale(dat[dat.length-1][caseType])+10})`)






    })

    const xAxis = (g) => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(axisBottom(xScale)
        .tickValues(xScale.domain().filter(function(d,i){ return !(((i+1)%10))})))


        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(data[i].dayCount))
    }


    const xAxisG = svg.append('g')
        .call(xAxis)
        
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 45)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel)


    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(yScale).ticks(null, data[i].format).tickSize(-innerWidth))
            
            .call(g => g.select(".domain").remove())

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(data[i].total))
    }


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





}


export default DrawLine