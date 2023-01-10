import React from "react";

const DefaultCard = (props) => {
    const {Title = "", P1 = "", P2 ="", Buttons =""} = props;
    return (
        <div className="default-card">
            <div className="default-card__container">
                <h1 className="default-card__container-title">
                    {Title}
                </h1>
                <p className="default-card__container-firstText" >
                    {P1}
                </p>
                <p className="default-card__container-secondText">
                    {P2}
                </p>
                <div className="default-card__container-button">
                    {Buttons}
                </div>
            </div>
        </div>
    );
}

export default DefaultCard;