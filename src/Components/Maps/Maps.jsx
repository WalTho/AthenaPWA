import React, { useState } from "react";
import MapTranslation from "../../translation/map.json";
import ModalsContainer from "./ModalsContainer";

const tMap = MapTranslation;

const Maps = () => {
    const [state, setState] = useState({});

    // ^ juste pour les test, vue que les json ne son pas ici
    let centauri = {
        "nameSystem": "Centauri",
        "planets": tMap.planets
    };
    let orion = {
        "nameSystem": "Orion",
        "planets": tMap.planets
    };
    let event = {
        "nameSystem": "Event",
        "planets": tMap.planets
    };
    let options = {
        copy: tMap.copy,
        titles: tMap.titles
    };
    // ^ FIN DES TEST

    // ! Varible a modifier pour charger le system choisi
    let activeSys = centauri;

    const toggleModal = (name) => {
        setState({});
        switch (name) {
            case 'avernus': setState({ showAvernusModal: true });
                break;
            case 'triton': setState({ showTritonModal: true });
                break;
            case 'overvent': setState({ showOverventModal: true });
                break;
            case 'rothis': setState({ showRothisModal: true });
                break;
            case 'terra': setState({ showTerraModal: true });
                break;
            case 'exolia': setState({ showExoliaModal: true });
                break;
            case 'treossa': setState({ showTreossaModal: true });
                break;
            case 'pertam': setState({ showPertamModal: true });
                break;
            case 'titan': setState({ showTitanModal: true });
                break;
            case 'luna': setState({ showLunaModal: true });
                break;
            case 'mars': setState({ showMarsModal: true });
                break;
            case 'europa': setState({ showEuropaModal: true });
                break;
            case 'alien': setState({ showAlienModal: true });
                break;
            case 'wormhole': setState({ showWormholeModal: true });
                break;
            default: console.log('Invalid modal name');
        }
    }

    // ? Ici on donne le name du button de la page 'sectorMap'
    function selectorSystem(nameSystem) {
        switch (nameSystem) {
            case centauri.nameSystem:
                return <ModalsContainer toggleModal={toggleModal} state={state} options={options} system={centauri} />;
            case orion.nameSystem:
                return <ModalsContainer toggleModal={toggleModal} state={state} options={options} system={orion} />;
            case event.nameSystem:
                return <ModalsContainer toggleModal={toggleModal} state={state} options={options} system={event} />;
            default:
                console.log("Le systeme existe pas!");
                break;
        }
    }

    return (
        <div className="container">
            <div className="container-title">
                <p className="container-title-text">{activeSys.nameSystem}</p>
            </div>
            <div className="maps">
                {selectorSystem(activeSys.nameSystem)}
            </div>
        </div>
    );
};

export default Maps;