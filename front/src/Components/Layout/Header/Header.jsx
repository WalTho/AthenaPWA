import React from 'react';
import {useState} from "react";

import uiTranslation from "../../../translations/ui.json";


function Header() {

    const Text = uiTranslation;

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const [touchPosition, setTouchPosition] = useState(null)
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientY
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientY
        const diff = touchDown - currentTouch
        if (diff > 5) {
            setShowLinks(!showLinks)
        }
        if (diff < -5) {
            setShowLinks(!showLinks)
        }
        setTouchPosition(null)
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__container-title">
                    <h1 className="header__container-title-text">
                        {Text.UI.header.title}
                    </h1>
                </div>
                <div className="header__container-nav" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <ul className={`header__container-nav-list ${showLinks ? "show-nav" : "hide-nav"}`}>
                        <li className="header__container-nav-list-item">
                            <div className="header__container-nav-list-item-line"></div>
                            <a href="/" className="header__container-nav-list-item-link">
                                {Text.UI.header.home}
                            </a>
                        </li>
                        <li className="header__container-nav-list-item">
                            <div className="header__container-nav-list-item-line"></div>
                            <a href="/about" className="header__container-nav-list-item-link">
                                {Text.UI.header.about}
                            </a>
                        </li>
                        <li className="header__container-nav-list-item">
                            <div className="header__container-nav-list-item-line"></div>
                            <a href="/maps" className="header__container-nav-list-item-link">
                                {Text.UI.header.maps}
                            </a>
                        </li>
                        <li className="header__container-nav-list-item">
                            <div className="header__container-nav-list-item-line"></div>
                            <a href="/" className="header__container-nav-list-item-link">
                                {Text.UI.header.infos}
                            </a>
                        </li>
                        <li className="header__container-nav-list-item">
                            <div className="header__container-nav-list-item-line"></div>
                            <a href="/join-us" className="header__container-nav-list-item-link">
                                {Text.UI.header.joinUs}
                            </a>
                        </li>
                    </ul>
                    <button className="header__container-nav-button" onClick={handleShowLinks} tabIndex="1"
                            aria-label="Menu">
                        <i className={`fa-solid ${showLinks ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;