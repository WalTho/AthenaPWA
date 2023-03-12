import React, {useState} from "react";

import MapTranslation from "../../../translations/maps.json";


const ModalCard = ({selectedSystem, selectedPlanet, onClose}) => {

    const tMap = MapTranslation;


    const [popupClass, setPopupClass] = useState("");

    function copied() {
        setPopupClass("show");
        setTimeout(function () {
            setPopupClass("");
        }, 1000);
    }

    function copyGPS(text) {
        navigator.clipboard.writeText(text);
        copied();
    }

    return (
        <div id="Modal" className="modal show">
            <div className="modal-content">
                <span id="CloseModal" className="close" onClick={onClose}>
                    &times;
                </span>
                <p className="modal-content-title">
                    {tMap[selectedSystem].planets[selectedPlanet].title}
                </p>
                <img className="modal-content-img" src={tMap[selectedSystem].planets[selectedPlanet].image} alt=""/>
                <p className="modal-content-firstText">
                    {tMap[selectedSystem].planets[selectedPlanet].description}
                </p>
                <div className="modal-content-secondText">
                    <ul className="modal-content-secondText-list">
                        <li className="modal-content-secondText-list-item">
                            <div className="modal-content-secondText-list-item-gps popup">
                                    <span className="modal-content-secondText-list-item-gps-title">
                                        {tMap.placeholders.gpsTitle}
                                    </span>
                                <span
                                    className="modal-content-secondText-list-item-gps-content"
                                    onClick={window.onload = function () {
                                        copyGPS(tMap[selectedSystem].planets[selectedPlanet].gps)
                                    }}
                                >
                                    {tMap[selectedSystem].planets[selectedPlanet].gps}
                                </span>
                                <span className={`popuptext ${popupClass}`} id="myPopup">
                                        {tMap.copy}
                                </span>
                            </div>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.sizeTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].size}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.gravityTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].gravity}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.atmosphereTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].atmosphere}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.oreTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].ore}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.iceTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].ice}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.faunaTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].fauna}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.weatherTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].weather}
                                </span>
                            </p>
                        </li>
                        <li className="modal-content-secondText-list-item">
                            <p className="modal-content-secondText-list-item-text">
                                {tMap.placeholders.temperatureTitle}
                                <span className="modal-content-secondText-list-item-text-data">
                                    {tMap[selectedSystem].planets[selectedPlanet].temperature}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ModalCard;