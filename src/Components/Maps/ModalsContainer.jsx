import ModalCard from "../Cards/ModalCard/ModalCard";
import SvgCentauri from "./SVG/SvgCentauri";
import SvgOrion from "./SVG/SvgOrion";


const ModalsContainer = ({ toggleModal, state, options, system }) => {
    function choixSVG() {
        if (system.nameSystem === "Centauri") {
            return <SvgCentauri toggleModal={toggleModal} />;
        } else if (system.nameSystem === "Orion") {
            return <SvgOrion toggleModal={toggleModal} />;
        } else {
            return undefined;
        }
    }

    function preparModal(modalName, planet) {
        return (
            <ModalCard
                modalName={modalName}
                onClickToggleModal={toggleModal}
                planet={planet}
                options={options}
            />
        )
    }

    return (
        <>
            {state.showAvernusModal && (preparModal("ModalAvernus", system.planets.avernus))}
            {state.showTritonModal && (preparModal("ModalTriton", system.planets.triton))}
            {state.showOverventModal && (preparModal("ModalOvervent", system.planets.overvent))}
            {state.showRothisModal && (preparModal("ModalRothis", system.planets.rothis))}
            {state.showTerraModal && (preparModal("ModalTerra", system.planets.terra))}
            {state.showExoliaModal && (preparModal("ModalExolia", system.planets.exolia))}
            {state.showTreossaModal && (preparModal("ModalTreossa", system.planets.treossa))}
            {state.showPertamModal && (preparModal("ModalPertam", system.planets.pertam))}
            {state.showTitanModal && (preparModal("ModalTitan", system.planets.titan))}
            {state.showLunaModal && (preparModal("ModalLuna", system.planets.luna))}
            {state.showMarsModal && (preparModal("ModalMars", system.planets.mars))}
            {state.showEuropaModal && (preparModal("ModalEuropa", system.planets.europa))}
            {state.showAlienModal && (preparModal("ModalAlien", system.planets.alien))}
            {state.showWormholeModal && (preparModal("ModalWormhole", system.planets.wormhole))}
            {choixSVG()}
        </>
    );
}

export default ModalsContainer;