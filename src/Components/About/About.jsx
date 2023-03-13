import React from "react";
import ImageCard from "../Cards/ImageCard/ImageCard.jsx"

import uiTranslation from "../../translations/about.json";

const About = () => {
    const Text = uiTranslation;
    return (
        <div className="about">
            <h1 className="about-title">
                {Text.about.title}
            </h1>
            <div className="about__container">
                <ImageCard
                    Title={Text.about.kliroc.title}
                    Img={Text.about.kliroc.img}
                    Alt={Text.about.kliroc.alt}
                    Text={Text.about.kliroc.text}
                />

                <ImageCard
                    Title={Text.about.beurt.title}
                    Img={Text.about.beurt.img}
                    Alt={Text.about.beurt.alt}
                    Text={Text.about.beurt.text}
                />

                <ImageCard
                    Title={Text.about.walto.title}
                    Img={Text.about.walto.img}
                    Alt={Text.about.walto.alt}
                    Text={Text.about.walto.text}
                />
            </div>
        </div>
    );
}

export default About;