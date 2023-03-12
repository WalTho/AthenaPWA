import React from 'react';

import MapTranslation from "../../translations/maps.json";

const Maps = () => {
    const tMap = MapTranslation;
    return (
        <div className="container">
            <div className="container-select">
                <a className="container-select-link" href="/centauri">
                    {tMap.centauri.title}
                </a>
            </div>
            <div className="container-select">
                <a className="container-select-link" href="/orion">
                    {tMap.orion.title}
                </a>
            </div>
        </div>
    )
}
export default Maps;