import React from "react";
import DefaultCard from "../../Components/Cards/DefaultCard/DefaultCard.jsx";
import LinkButton from "../../Components/Buttons/LinkButton.jsx";

import homeTranslation from "../../translations/home.json";

const Home = () => {
    const Text = homeTranslation;
    return (
        <div className="home">
            <div className="home__container">
                <DefaultCard
                    Title={Text.home.title}
                    P1={Text.home.firstText}
                    P2={Text.home.secondText}
                    Buttons={
                        <>
                            <LinkButton Label="Comprendre Space Engineers" Link="/how-to"/>
                            <LinkButton Label="Règles de nos serveurs" Link="/rules"/>
                            <LinkButton Label="Nous rejoindre" Link="/join-us"/>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default Home;