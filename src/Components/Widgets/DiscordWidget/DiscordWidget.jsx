import React from "react";
import WidgetBot from '@widgetbot/react-embed'

function DiscordWidget(props){
    return <WidgetBot
        className={props.className}
        server={props.server}
        channel={props.channel}
    />
}

export default DiscordWidget;