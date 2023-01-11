import React from "react";
import DefaultCard from "../Cards/DefaultCard/DefaultCard";

import LinkButton from "../Buttons/LinkButton.jsx"
import uiTranslation from "../../translations/uiText.json";

const uiText = uiTranslation;

const MapSelector = (...props) => {

    return (
        <div className="map-selector">
            <div className="map-selector__container">
                <DefaultCard
                    Title={uiText.UI.mapSelector.title}
                    P1={uiText.UI.mapSelector.text}
                    Buttons={
                        <>
                            <div className="btnContainer">
                                <LinkButton Label={uiText.UI.mapSelector.btn.centauri}/>
                                <LinkButton Label={uiText.UI.mapSelector.btn.orion}/>
                                <LinkButton Label={uiText.UI.mapSelector.btn.event}/>
                            </div>
                            <div className="imgContainer">
                                <img src="favicon.ico" className="imgContainer-image" alt="systeme centauri"/>
                                <img src="favicon.ico" className="imgContainer-image" alt="systeme orion"/>
                                <img src="favicon.ico" className="imgContainer-image" alt="systeme event"/>
                            </div>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default MapSelector;