import React , {useState} from "react";

const ModalCard = (props) => {
    
    let {planet, tMap} = props;
    let {titles, copy} = tMap;

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
        <div id={props.modalName} className="modal show">
            <div className="modal-content">
                <span id={`Close${props.modalName}`} className="close" onClick={props.onClickToggleModal}>&times;</span>
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
                                    {titles["gps-title"]}
                                </span>
                                <span
                                    className="modal-content-secondText-list-item-gps-content"
                                    onClick={window.onload = () => {copyGPS(planet.gps)}}
                                >
                                    {planet.gps}
                                </span>
                                <span className={`popuptext ${popupClass}`} id={"myPopup"}>
                                    {copy}
                                </span>
                            </div>
                        </li>
                        {ListItem(titles["size-title"], planet.size)}
                        {ListItem(titles["gravity-title"], planet.gravity)}
                        {ListItem(titles["atmosphere-title"], planet.atmosphere)}
                        {ListItem(titles["ore-title"], planet.ore)}
                        {ListItem(titles["ice-title"], planet.ice)}
                        {ListItem(titles["fauna-title"], planet.fauna)}
                        {ListItem(titles["weather-title"], planet.weather)}
                        {ListItem(titles["temperature-title"], planet.temperature)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ModalCard;