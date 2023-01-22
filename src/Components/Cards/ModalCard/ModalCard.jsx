import React, { useState, useEffect } from "react";

const ModalCard = ({ planet, options, modalName, onClickToggleModal }) => {
    
    //Pour activer la class css de la modal
    const [show, setShow] = useState("");
    // Copy GPS
    const [popupClass, setPopupClass] = useState("");

    function copied() {
        setPopupClass("show");
        setTimeout(function() {
            setPopupClass("");
        }, 1000);
    }
    function copyGPS(text) {
        navigator.clipboard.writeText(text);
        copied();
    }
    //Au montage du comp
    useEffect(() => {
        setShow("show");
        //Au demontage du compo
        return () => {
            setShow("");
        };
    }, []);

    function ListItem(label,data) {
        return(
            <li className="modal-content-secondText-list-item">
                <p className="modal-content-secondText-list-item-text">
                { label }
                    <span className="modal-content-secondText-list-item-text-data">
                        { data }
                    </span>
                </p>
            </li>
        );
    }

    return (
        <div id={modalName} className={`modal ${show}`}>
            <div className="modal-content">
                <span id={`Close${modalName}`} className="close" onClick={onClickToggleModal}>&times;</span>
                <p className="modal-content-title">{planet.title}</p>
                <img className="modal-content-img" src={planet.image} alt={"image de la planete " + planet.title}/>
                <p className="modal-content-firstText">
                    {planet.description}
                </p>
                <div className="modal-content-secondText">
                    <ul className="modal-content-secondText-list">
                        <li className="modal-content-secondText-list-item">
                            <div className="modal-content-secondText-list-item-gps popup">
                                <span className="modal-content-secondText-list-item-gps-title">
                                    {options.titles["gps-title"]}
                                </span>
                                <span
                                    className="modal-content-secondText-list-item-gps-content"
                                    onClick={window.onload = () => {copyGPS(planet.gps)}}
                                >
                                    {planet.gps}
                                </span>
                                <span className={`popuptext ${popupClass}`} id={"myPopup"}>
                                    {options.copy}
                                </span>
                            </div>
                        </li>
                        {ListItem(options.titles["size-title"], planet.size)}
                        {ListItem(options.titles["gravity-title"], planet.gravity)}
                        {ListItem(options.titles["atmosphere-title"], planet.atmosphere)}
                        {ListItem(options.titles["ore-title"], planet.ore)}
                        {ListItem(options.titles["ice-title"], planet.ice)}
                        {ListItem(options.titles["fauna-title"], planet.fauna)}
                        {ListItem(options.titles["weather-title"], planet.weather)}
                        {ListItem(options.titles["temperature-title"], planet.temperature)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ModalCard;