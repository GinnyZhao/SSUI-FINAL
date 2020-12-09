export const color = (caseType) => {
    switch (caseType) {
        case "cases":
            return "#306FAA"
        case "recovered":  
            return "#3AA65F"
        case "active":
            return "#DEBB3D"
        case "deaths":
            return "#992222"
        case "daily":
            return "#CB7B7B"
        case "daily_deaths":
            return "#978AE3"
        default:
            return "#306FAA"
    }
}