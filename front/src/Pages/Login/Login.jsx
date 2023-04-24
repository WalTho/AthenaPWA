import React from "react";
import DefaultCard from "../../Components/Cards/DefaultCard/DefaultCard.jsx";

import CancelButton from "../../Components/Buttons/CancelButton.jsx";
import ValidButton from "../../Components/Buttons/ValidButton.jsx";
import uiTranslation from "../../translations/ui.json";

const Text = uiTranslation;

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <DefaultCard
                    Title={Text.UI.login.title}
                    P1={Text.UI.login.text}
                    Buttons={
                        <>
                            <CancelButton Label={Text.UI.login.btn.back}/>
                            <ValidButton Label={Text.UI.login.btn.login}/>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default Login;