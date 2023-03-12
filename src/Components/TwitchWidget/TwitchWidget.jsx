import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const TwitchWidget = () => {
    return (
        <ReactTwitchEmbedVideo
            channel="kliroc85"
            layout="video"
            theme="dark"
            height="900px"
            width="80%"
        />
    );
};

export default TwitchWidget;