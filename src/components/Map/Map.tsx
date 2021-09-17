import React, { useEffect, useState } from "react";
import { ResponsiveGeoMap } from '@nivo/geo'
import countries from "./Assets/MapCountries.json";

export const Map = () =>{
    const [mapRotation, setMapRotation] = useState(0);
    useEffect(()=>{
        let interval = setInterval(() => setMapRotation(prev=>{
            if(prev >= 360)
                return 0;
            return prev+0.1;
        }), 100);
        return function(){
            clearInterval(interval);
        }
    },[]);
    
    return (
        <ResponsiveGeoMap
            features={countries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            projectionType="orthographic"
            projectionScale={320}
            projectionTranslation={[ 0.5, 0.5 ]}
            projectionRotation={[ mapRotation, -10, 7 ]}
            fillColor="#eeeeee"
            borderColor="#0170f8"
            borderWidth={0.5}
            enableGraticule={true}
            graticuleLineWidth={0.25}
            graticuleLineColor="#d0c7ff"
        />
    );
};