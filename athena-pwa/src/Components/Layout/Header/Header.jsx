import * as React from 'react';

const Header = () => {
    return (
      <div className="header">
        <h1 className="header__title">
          Athena
        </h1>
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
                <a href="/" className="header__nav-list-item-link">
                    Home
                </a>
            </li>
            <li className="header__nav-list-item">
                <a href="/" className="header__nav-list-item-link">
                    About
                </a>
            </li>
            <li className="header__nav-list-item">
                <a href="/" className="header__nav-list-item-link">
                    Medias
                </a>
            </li>
            <li className="header__nav-list-item">
                <a href="/" className="header__nav-list-item-link">
                    Infos
                </a>
            </li>
            <li className="header__nav-list-item">
                <a href="/" className="header__nav-list-item-link">
                    Join us
                </a>
            </li>
          </ul>
            <button className="header__nav-button">
                <span className="header__nav-button-icon"></span>
            </button>
        </div>
      </div>
  );
}

export default Header;