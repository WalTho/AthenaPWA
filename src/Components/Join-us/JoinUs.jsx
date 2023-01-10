import React from "react";
import DiscordWidget from '../DiscordWidget/DiscordWidget';
import TwitchWidget from '../TwitchWidget/TwitchWidget';

const JoinUs = () => {
    return (
        <div className="join-us">
            <div className="join-us__container">
                <h1 className="join-us__container-title">
                    REJOIGNEZ-NOUS !
                </h1>
                <h2 className="join-us__container-showcase">Aperçu de notre discord :</h2>
                <DiscordWidget
                    className="join-us__container-discord"
                    server=""
                    channel=""
                />
                <h2 className="join-us__container-showcase">Aperçu de notre serveur :</h2>
                <TwitchWidget
                    className="join-us__container-twitch"
                />
            </div>
        </div>
    );
}

export default JoinUs;
