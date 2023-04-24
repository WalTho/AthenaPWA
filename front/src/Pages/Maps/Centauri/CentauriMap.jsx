import React from "react";

import useModal from "../../../Components/Cards/ModalCard/UseModal.jsx"
import ModalCard from "../../../Components/Cards/ModalCard/ModalCard.jsx"
import CentauriSVG from "../../../Components/SvgMaps/CentauriSVG.jsx";

import MapTranslation from "../../../translations/maps.json";

const CentauriMap = () => {
    const Text = MapTranslation;
    const {isModalOpen, openModal, closeModal, modalContent} = useModal();
    return (
        <div className="container">
            <div className="container-title">
                <p className="container-title-text">{Text.centauri.title}</p>
            </div>
            <div className="maps">
                {isModalOpen && modalContent}
                <svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="maps-svg"
                >
                    <CentauriSVG/>

                    <g className="maps-svg-avernus">
                        <circle cx="678" cy="685" r="16" fill="#776239"
                                cursor="pointer" className="maps-svg-avernus-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'avernus'}
                                    />
                                )}
                        />
                        <title>Avernus</title>
                    </g>
                    <g className="maps-svg-triton">
                        <circle cx="288" cy="669" r="16" fill="#7BA5AB"
                                cursor="pointer" className="maps-svg-triton-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'triton'}
                                    />
                                )}
                        />
                        <title>Triton</title>
                    </g>
                    <g className="maps-svg-exolia">
                        <circle cx="213" cy="937" r="16" fill="#2C7652"
                                cursor="pointer" className="maps-svg-exolia-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'exolia'}
                                    />
                                )}
                        />
                        <title>Exolia</title>
                    </g>
                    <g className="maps-svg-pertam">
                        <circle cx="216" cy="538" r="16" fill="#D3AF67"
                                cursor="pointer" className="maps-svg-pertam-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'pertam'}
                                    />
                                )}
                        />
                        <title>Pertam</title>
                    </g>
                    <g className="maps-svg-treossa">
                        <circle cx="785" cy="538" r="16" fill="#753A3A"
                                cursor="pointer" className="maps-svg-treossa-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'treossa'}
                                    />
                                )}
                        />
                        <title>Treossa</title>
                    </g>
                    <g className="maps-svg-alien">
                        <circle cx="857" cy="202" r="16" fill="#654E82"
                                cursor="pointer" className="maps-svg-alien-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'alien'}
                                    />
                                )}
                        />
                        <title>Alien</title>
                    </g>
                    <g className="maps-svg-mars">
                        <circle cx="440" cy="139" r="16" fill="#A76042"
                                cursor="pointer" className="maps-svg-mars-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'mars'}
                                    />
                                )}
                        />
                        <title>Mars</title>
                    </g>
                    <g className="maps-svg-terra">
                        <circle cx="337" cy="240" r="16" fill="#579B6E"
                                cursor="pointer" className="maps-svg-terra-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'terra'}
                                    />
                                )}
                        />
                        <title>Terra</title>
                    </g>
                    <g className="maps-svg-titan">
                        <circle cx="838" cy="177" r="8" fill="#D09259"
                                cursor="pointer" className="maps-svg-titan-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'titan'}
                                    />
                                )}
                        />
                        <title>Titan</title>
                    </g>
                    <g className="maps-svg-europa">
                        <circle cx="432" cy="110" r="8" fill="#64998C"
                                cursor="pointer" className="maps-svg-europa-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'europa'}
                                    />
                                )}
                        />
                        <title>Europa</title>
                    </g>
                    <g className="maps-svg-luna">
                        <circle cx="319" cy="212" r="8" fill="#828282"
                                cursor="pointer" className="maps-svg-luna-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'luna'}
                                    />
                                )}
                        />
                        <title>Luna</title>
                    </g>
                    <g className="maps-svg-rothis">
                        <circle cx="189" cy="916" r="8" fill="#636894"
                                cursor="pointer" className="maps-svg-rothis-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'rothis'}
                                    />
                                )}
                        />
                        <title>Rothis</title>
                    </g>
                    <g className="maps-svg-overvent">
                        <circle cx="540" cy="538" r="109.5" fill="#62452A"
                                stroke="url(#paint6_radial_135_48)" strokeWidth="30"
                                cursor="pointer" className="maps-svg-overvent-planet highlight"
                                onClick={() => openModal(
                                    <ModalCard
                                        onClose={closeModal}
                                        selectedSystem={'centauri'}
                                        selectedPlanet={'overvent'}
                                    />
                                )}
                        />
                        <title>Overvent</title>
                    </g>
                    <path
                        d="M410.433 480.75L410 480L409.567 480.75L401.773 494.25L401.34 495H402.206H417.794H418.66L418.227 494.25L410.433 480.75Z"
                        fill="#992B95" stroke="black" cursor="pointer" className="maps-svg-wormhole-planet highlight"
                        onClick={() => openModal(
                            <ModalCard
                                onClose={closeModal}
                                selectedSystem={'centauri'}
                                selectedPlanet={'wormhole'}
                            />
                        )}
                    />
                </svg>
            </div>
        </div>
    );
}

export default CentauriMap;