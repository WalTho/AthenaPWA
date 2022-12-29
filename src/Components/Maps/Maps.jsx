import React, { useState } from "react";
import MapTranslation from "../../translation/map.json";

const tMap = MapTranslation;

const Maps = () => {

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

    // Modal
    const [showAvernusModal, setShowAvernusModal] = useState(false);
    const [showTritonModal, setShowTritonModal] = useState(false);
    const [showOverventModal, setShowOverventModal] = useState(false);
    const [showRothisModal, setShowRothisModal] = useState(false);
    const [showTerraModal, setShowTerraModal] = useState(false);
    const [showExoliaModal, setShowExoliaModal] = useState(false);
    const [showTreossaModal, setShowTreossaModal] = useState(false);
    const [showPertamModal, setShowPertamModal] = useState(false);
    const [showTitanModal, setShowTitanModal] = useState(false);
    const [showLunaModal, setShowLunaModal] = useState(false);
    const [showMarsModal, setShowMarsModal] = useState(false);
    const [showEuropaModal, setShowEuropaModal] = useState(false);
    const [showAlienModal, setShowAlienModal] = useState(false);
    const [showWormholeModal, setShowWormholeModal] = useState(false);

    function toggleModal(name) {
        setShowAvernusModal(false);
        setShowTritonModal(false);
        setShowOverventModal(false);
        setShowRothisModal(false);
        setShowTerraModal(false);
        setShowExoliaModal(false);
        setShowTreossaModal(false);
        setShowPertamModal(false);
        setShowTitanModal(false);
        setShowLunaModal(false);
        setShowMarsModal(false);
        setShowEuropaModal(false);
        setShowAlienModal(false);
        setShowWormholeModal(false);

        switch (name) {
            case 'avernus':
                setShowAvernusModal(true);
                break;
            case 'triton':
                setShowTritonModal(true);
                break;
            case 'overvent':
                setShowOverventModal(true);
                break;
            case 'rothis':
                setShowRothisModal(true);
                break;
            case 'terra':
                setShowTerraModal(true);
                break;
            case 'exolia':
                setShowExoliaModal(true);
                break;
            case 'treossa':
                setShowTreossaModal(true);
                break;
            case 'pertam':
                setShowPertamModal(true);
                break;
            case 'titan':
                setShowTitanModal(true);
                break;
            case 'luna':
                setShowLunaModal(true);
                break;
            case 'mars':
                setShowMarsModal(true);
                break;
            case 'europa':
                setShowEuropaModal(true);
                break;
            case 'alien':
                setShowAlienModal(true);
                break;
            case 'wormhole':
                setShowWormholeModal(true);
                break;
            default:
                console.log('Invalid modal name');
        }
    }

    return (
        <div className="container">
            <div className="container-title">
                <p className="container-title-text">{tMap.titles.Centauri}</p>
            </div>
            <div className="maps">
                { showAvernusModal && (
                    <div id="ModalAvernus" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalAvernus" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.avernus.title}</p>
                            <img className="modal-content-img" src={tMap.planets.avernus.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.avernus.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.avernus.gps)}}
                                            >
                                                {tMap.planets.avernus.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.avernus.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) }
                {showTritonModal && (
                    <div id="ModalTriton" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalTriton" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.triton.title}</p>
                            <img className="modal-content-img" src={tMap.planets.triton.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.triton.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.triton.gps)}}
                                            >
                                                {tMap.planets.triton.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.triton.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showOverventModal && (
                    <div id="ModalOvervent" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalOvervent" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.overvent.title}</p>
                            <img className="modal-content-img" src={tMap.planets.overvent.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.overvent.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.overvent.gps)}}
                                            >
                                                {tMap.planets.overvent.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.overvent.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showRothisModal && (
                    <div id="ModalRothis" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalRothis" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.rothis.title}</p>
                            <img className="modal-content-img" src={tMap.planets.rothis.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.rothis.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.rothis.gps)}}
                                            >
                                                {tMap.planets.rothis.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.rothis.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showTerraModal && (
                    <div id="ModalTerra" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalTerra" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.terra.title}</p>
                            <img className="modal-content-img" src={tMap.planets.terra.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.terra.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.terra.gps)}}
                                            >
                                                {tMap.planets.terra.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.terra.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showExoliaModal && (
                    <div id="ModalExolia" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalExolia" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.exolia.title}</p>
                            <img className="modal-content-img" src={tMap.planets.exolia.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.exolia.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.exolia.gps)}}
                                            >
                                                {tMap.planets.exolia.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.exolia.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showTreossaModal && (
                    <div id="ModalTreossa" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalTreossa" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.treossa.title}</p>
                            <img className="modal-content-img" src={tMap.planets.treossa.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.treossa.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.treossa.gps)}}
                                            >
                                                {tMap.planets.treossa.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.treossa.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showPertamModal && (
                    <div id="ModalPertam" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalPertam" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.pertam.title}</p>
                            <img className="modal-content-img" src={tMap.planets.pertam.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.pertam.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.pertam.gps)}}
                                            >
                                                {tMap.planets.pertam.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.pertam.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showTitanModal && (
                    <div id="ModalTitan" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalTitan" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.titan.title}</p>
                            <img className="modal-content-img" src={tMap.planets.titan.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.titan.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.titan.gps)}}
                                            >
                                                {tMap.planets.titan.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.titan.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showLunaModal && (
                    <div id="ModalLuna" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalLuna" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.luna.title}</p>
                            <img className="modal-content-img" src={tMap.planets.luna.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.luna.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.luna.gps)}}
                                            >
                                                {tMap.planets.luna.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.luna.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showMarsModal && (
                    <div id="ModalMars" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalMars" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.mars.title}</p>
                            <img className="modal-content-img" src={tMap.planets.mars.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.mars.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.mars.gps)}}
                                            >
                                                {tMap.planets.mars.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.mars.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showEuropaModal && (
                    <div id="ModalEuropa" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalEuropa" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.europa.title}</p>
                            <img className="modal-content-img" src={tMap.planets.europa.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.europa.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.europa.gps)}}
                                            >
                                                {tMap.planets.europa.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.europa.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showAlienModal && (
                    <div id="ModalAlien" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalAlien" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.alien.title}</p>
                            <img className="modal-content-img" src={tMap.planets.alien.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.alien.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.alien.gps)}}
                                            >
                                                {tMap.planets.alien.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["size-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.size}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["gravity-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.gravity}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["atmosphere-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.atmosphere}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ore-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.ore}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["ice-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.ice}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["fauna-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.fauna}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["weather-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.weather}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="modal-content-secondText-list-item">
                                        <p className="modal-content-secondText-list-item-text">
                                            {tMap.titles["temperature-title"]}
                                            <span className="modal-content-secondText-list-item-text-data">
                                                {tMap.planets.alien.temperature}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {showWormholeModal && (
                    <div id="ModalWormhole" className="modal show">
                        <div className="modal-content">
                            <span id="CloseModalWormhole" className="close" onClick={toggleModal}>&times;</span>
                            <p className="modal-content-title">{tMap.planets.wormhole.title}</p>
                            <img className="modal-content-img" src={tMap.planets.wormhole.image} alt="" />
                            <p className="modal-content-firstText">
                                {tMap.planets.wormhole.description}
                            </p>
                            <div className="modal-content-secondText">
                                <ul className="modal-content-secondText-list">
                                    <li className="modal-content-secondText-list-item">
                                        <div className="modal-content-secondText-list-item-gps popup">
                                            <span className="modal-content-secondText-list-item-gps-title">
                                                {tMap.titles["gps-title"]}
                                            </span>
                                            <span
                                                className="modal-content-secondText-list-item-gps-content"
                                                onClick={window.onload = function() {copyGPS(tMap.planets.wormhole.gps)}}
                                            >
                                                {tMap.planets.wormhole.gps}
                                            </span>
                                            <span className={`popuptext ${popupClass}`} id="myPopup">
                                                {tMap.copy}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none"
                    xmlns="http://www.w3.org/2000/svg" className="maps-svg"
                >
                    <g className="assets">
                        <circle cx="540" cy="538" r="82" stroke="url(#paint0_radial_135_48)"
                            strokeWidth="22"
                        />
                        <circle cx="539.5" cy="538.5" r="94.5" stroke="url(#paint1_radial_135_48)"
                            strokeWidth="22"
                        />
                        <circle cx="540" cy="538" r="125" stroke="url(#paint2_radial_135_48)"
                            strokeWidth="22"
                        />
                        <circle cx="540" cy="538" r="156" stroke="url(#paint3_radial_135_48)"
                            strokeWidth="30"
                        />
                        <circle cx="539.5" cy="538.5" r="177" stroke="url(#paint4_radial_135_48)"
                            strokeWidth="37"
                        />
                        <circle cx="213" cy="937" r="30.5" stroke="#979797"/>
                        <circle cx="857" cy="202" r="32.5" stroke="#979797"/>
                        <circle cx="440" cy="139" r="29.5" stroke="#979797"/>
                        <circle cx="337" cy="240" r="32.5" stroke="#979797"/>

                        <circle cx="539.5" cy="538.5" r="202" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="539.5" cy="538.5" r="245" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="540" cy="540" r="283.5" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="540" cy="540" r="323.5" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="538" cy="538" r="361.5" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="537.5" cy="540.5" r="412" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="540" cy="540" r="465.5" stroke="white" strokeOpacity="0.5"/>
                        <circle cx="539.5" cy="538.5" r="515" stroke="white" strokeOpacity="0.5"/>
                    </g>
                    <circle cx="213" cy="937" r="24" stroke="url(#paint5_radial_135_48)"
                        strokeWidth="10"
                    />

                    <g className="maps-svg-avernus">
                        <circle cx="678" cy="685" r="16" fill="#776239"
                            cursor="pointer" className="maps-svg-avernus-planet"
                            onClick={() => toggleModal('avernus')}
                        />
                        <title>Avernus</title>
                    </g>
                    <g className="maps-svg-triton">
                        <circle cx="288" cy="669" r="16" fill="#7BA5AB"
                            cursor="pointer" className="maps-svg-triton-planet"
                            onClick={() => toggleModal('triton')}
                        />
                        <title>Triton</title>
                    </g>
                    <g className="maps-svg-exolia">
                        <circle cx="213" cy="937" r="16" fill="#2C7652"
                            cursor="pointer" className="maps-svg-exolia-planet"
                            onClick={() => toggleModal('exolia')}
                        />
                        <title>Exolia</title>
                    </g>
                    <g className="maps-svg-pertam">
                        <circle cx="216" cy="538" r="16" fill="#D3AF67"
                            cursor="pointer" className="maps-svg-pertam-planet"
                            onClick={() => toggleModal('pertam')}
                        />
                        <title>Pertam</title>
                    </g>
                    <g className="maps-svg-treossa">
                        <circle cx="785" cy="538" r="16" fill="#753A3A"
                            cursor="pointer" className="maps-svg-treossa-planet"
                            onClick={() => toggleModal('treossa')}
                        />
                        <title>Treossa</title>
                    </g>
                    <g className="maps-svg-alien">
                        <circle cx="857" cy="202" r="16" fill="#654E82"
                            cursor="pointer" className="maps-svg-alien-planet"
                            onClick={() => toggleModal('alien')}
                        />
                        <title>Alien</title>
                    </g>
                    <g className="maps-svg-mars">
                        <circle cx="440" cy="139" r="16" fill="#A76042"
                            cursor="pointer" className="maps-svg-mars-planet"
                            onClick={() => toggleModal('mars')}
                        />
                        <title>Mars</title>
                    </g>
                    <g className="maps-svg-terra">
                        <circle cx="337" cy="240" r="16" fill="#579B6E"
                            cursor="pointer" className="maps-svg-terra-planet"
                            onClick={() => toggleModal('terra')}
                        />
                        <title>Terra</title>
                    </g>
                    <g className="maps-svg-titan">
                        <circle cx="838" cy="177" r="8" fill="#D09259"
                            cursor="pointer" className="maps-svg-titan-planet"
                            onClick={() => toggleModal('titan')}
                        />
                        <title>Titan</title>
                    </g>
                    <g className="maps-svg-europa">
                        <circle cx="432" cy="110" r="8" fill="#64998C"
                            cursor="pointer" className="maps-svg-europa-planet"
                            onClick={() => toggleModal('europa')}
                        />
                        <title>Europa</title>
                    </g>
                    <g className="maps-svg-luna">
                        <circle cx="319" cy="212" r="8" fill="#828282"
                            cursor="pointer" className="maps-svg-luna-planet"
                            onClick={() => toggleModal('luna')}
                        />
                        <title>Luna</title>
                    </g>
                    <g className="maps-svg-rothis">
                        <circle cx="189" cy="916" r="8" fill="#636894"
                            cursor="pointer" className="maps-svg-rothis-planet"
                            onClick={() => toggleModal('rothis')}
                        />
                        <title>Rothis</title>
                    </g>
                    <g className="maps-svg-overvent">
                        <circle cx="540" cy="538" r="109.5" fill="#62452A"
                            stroke="url(#paint6_radial_135_48)" strokeWidth="30"
                            cursor="pointer" className="maps-svg-overvent-planet"
                            onClick={() => toggleModal('overvent')}
                        />
                        <title>Overvent</title>
                    </g>

                    <path d="M410.433 480.75L410 480L409.567 480.75L401.773 494.25L401.34 495H402.206H417.794H418.66L418.227 494.25L410.433 480.75Z"
                        fill="#992B95" stroke="black" cursor="pointer" className="maps-svg-wormhole-planet"
                        onClick={() => toggleModal('wormhole')}
                    />
                    <defs>
                        <radialGradient id="paint0_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(540 538) rotate(90) scale(232.525)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#F09000" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(539.5 538.5) rotate(90) scale(273.463)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#F09000" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(540 538) rotate(90) scale(373.35)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#F09000" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint3_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(540 538) rotate(90) scale(461.775)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#F09000" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint4_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(539.5 538.5) rotate(90) scale(519.088)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#F09000" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint5_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(213 937) rotate(90) scale(32.0625)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#BBBBBB" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint6_radial_135_48" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(540 538) rotate(90) scale(197)"
                        >
                            <stop/>
                            <stop offset="1" stopColor="#876533" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>

            </div>
            <script>

            </script>
        </div>
    );
}

export default Maps;