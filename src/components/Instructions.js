import React from 'react';
import "./Instructions.css"

export const Instructions = () => {
    return (   
        <div className="ins">
            {/* <h5 className="ins-text"> <b> Instructions </b></h5> */}
            <p className="ins-text"> Welcome to the COVID-VIZ dashboard! </p>
            <p className="ins-text"> To display data visualizations, click on the drop down menu to select specific country from the list. Country names and their corresponding flag will show on the right panel. </p> 
            <p className="ins-text"> Click on view side-by-side plot to display COVID cases visualizations in selected countries. Click on each graph to zoom in.</p>
            <p className="ins-text"> Click on view overlay plot to display COVID cases in selected countries all in one line graph.</p>
            <br/> <br/>    
        </div>          

    )
}
