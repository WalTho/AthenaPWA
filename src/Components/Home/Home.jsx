import React from "react";
import DefaultCard from "../Cards/DefaultCard/DefaultCard.jsx";

import uiTranslation from "../../translations/ui/ui.json";

const uiText = uiTranslation;

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <DefaultCard
                    Title = {uiText.UI.home.title}
                    P1 = {uiText.UI.home.firstText}
                    P2 = {uiText.UI.home.secondText}
                />
            </div>
        </div>
    );
}

export default Home;