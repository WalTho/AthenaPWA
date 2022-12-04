import React from "react";

import sun from '../Images/Stars/suntest.webp';
import earth from '../Images/Planets/earthtest.png';
import moon from '../Images/Moons/moontest.png';

//First planet
    //Modal
    function CloseModalPlanet1(){
        let modal = document.getElementById("ModalPlanet1");
        modal.style.display = "none";
    }
    // Planet OnClick actions
        function p1(){
            let modal = document.getElementById("ModalPlanet1");
            modal.style.display = "block";
            console.log("Planet 1");
        }
//First planet's moon
    //Modal
        function CloseModalMoon1a(){
            let modal = document.getElementById("ModalMoon1a");
            modal.style.display = "none";
        }
    // Planet OnClick actions
        function m1a(){
            let modal = document.getElementById("ModalMoon1a");
            modal.style.display = "block";
            console.log("Planet 1");
        }

const Maps = () => {
    return (
        <div className="container">
            <div className="container-title">
                <p className="container-title-text">PVE</p>
            </div>
            <div className="maps">
                <div className="maps-line"></div>
                <div className="maps-star">
                    <img
                        src={sun}
                        alt="star"
                        className="maps-star-img"
                    />
                </div>
                <button className="maps-planet1 btn btn-primary tooltip" onClick={p1}>
                    <img
                        src={earth}
                        alt="planet1"
                        className="maps-planet1-img"
                    />
                    <div className="right">
                        <h3>Terre</h3>
                        <i></i>
                    </div>
                </button>
                <div id="ModalPlanet1" className="modal">
                    <div className="modal-content">
                        <span id="CloseModalPlanet1" className="close" onClick={CloseModalPlanet1}>&times;</span>
                        <p>Some text in the Modal P..</p>
                    </div>
                </div>
                <button className="maps-moon1a btn btn-primary tooltip" onClick={m1a}>
                    <img
                        src={moon}
                        alt="moon1a"
                        className="maps-moon1a-img"
                    />
                    <div className="right">
                        <h3>Lune</h3>
                        <i></i>
                    </div>
                </button>
                <div id="ModalMoon1a" className="modal">
                    <div className="modal-content">
                        <span id="CloseModalMoon1a" className="close" onClick={CloseModalMoon1a}>&times;</span>
                        <p>Some text in the Modal M..</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maps;