import React, { useEffect } from 'react';
import DrawLine from './DrawLine'

const Visual = ( {names, data, caseType, slugs}) => {

    useEffect( () => {

        DrawLine(names, data, slugs, caseType)
    }, [caseType])

    return (
        <div className={"viz"} ></div>
    )
}

export default Visual