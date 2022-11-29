import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const TwitchWidget = () => {
    const embed = useRef();
    const handleReady = (e) => {
        embed.current = e;
    };
    return (
        <TwitchEmbed channel="kliroc85" withChat={false} autoplay muted darkMode={true} height="70vh" width="80%" hideControls onVideoReady={handleReady} />
    );
};

export default TwitchWidget;