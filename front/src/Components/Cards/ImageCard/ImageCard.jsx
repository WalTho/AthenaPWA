import React from "react";

const ImageCard = (props) => {
    const {Title = "", Text = "", Alt = "", Img = ""} = props;
    return (
        <div className="image-card">
            <div className="image-card__container">
                <h1 className="image-card__container-title">
                    {Title}
                </h1>
                <a className="image-card__container-link" href={Img}>
                    <img
                        className="image-card__container-link-img"
                        alt={Alt}
                        src={Img}
                    />
                </a>
                <p className="image-card__container-text">
                    {Text}
                </p>
            </div>
        </div>
    );
}

export default ImageCard;