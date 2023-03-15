import React from "react";
import DefaultCard from "../../Components/Cards/DefaultCard/DefaultCard.jsx";
import CancelButton from "../../Components/Buttons/CancelButton";

import uiTranslation from "../../translations/ui.json";

const Text = uiTranslation;

const NoMatch = () => {
    return (
        <div className="noMatch">
            <div className="noMatch__container">
                <DefaultCard
                    Title={Text.UI.noMatch.title}
                    P1={Text.UI.noMatch.firstText}
                    Buttons={
                        <>
                            <CancelButton Label={Text.UI.login.btn.back}/>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default NoMatch;