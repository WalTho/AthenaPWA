import React from "react";
import DefaultCard from "../../Cards/DefaultCard/DefaultCard.jsx";

import CancelButton from "../../Buttons/CancelButton.jsx";
import ValidButton from "../../Buttons/ValidButton.jsx";
import uiTranslation from "../../../translations/ui/ui.json";

const uiText = uiTranslation;

const Login = (...props) => {
    return (
        <div className="login">
            <div className="login__container">
                <DefaultCard
                    Title={uiText.UI.login.title}
                    P1={uiText.UI.login.text}
                    Buttons={
                        <>
                            <CancelButton Label={uiText.UI.login.btn.back}/>
                            <ValidButton Label={uiText.UI.login.btn.login}/>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default Login;