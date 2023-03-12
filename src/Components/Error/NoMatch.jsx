import React from "react";
import DefaultCard from "../Cards/DefaultCard/DefaultCard.jsx";
import CancelButton from "../Buttons/CancelButton";

import uiTranslation from "../../translations/ui.json";

const uiText = uiTranslation;

const NoMatch = () => {
    return (
        <div className="noMatch">
            <div className="noMatch__container">
                <DefaultCard
                    Title={uiText.UI.noMatch.title}
                    P1={uiText.UI.noMatch.firstText}
                    Buttons={
                        <>
                            <CancelButton Label={uiText.UI.login.btn.back}/>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default NoMatch;