import React from 'react';

import MapTranslation from "../../translations/maps.json";

const Maps = () => {
    const Text = MapTranslation;
    return (
        <div className="container">
            <div className="container-select">
                <a className="container-select-link" href="/centauri">
                    {Text.centauri.title}
                </a>
            </div>
            <div className="container-select">
                <a className="container-select-link" href="/orion">
                    {Text.orion.title}
                </a>
            </div>
        </div>
    )
}
export default Maps;