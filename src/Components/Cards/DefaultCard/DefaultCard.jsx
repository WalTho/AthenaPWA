import React from "react";

const DefaultCard = () => {
    return (
        <div className="default-card">
            <div className="default-card__container">
                <h1 className="default-card__container-title">
                    TITLE EXAMPLE
                </h1>
                <p className="default-card__container-firstText" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada est in erat aliquam cursus. Curabitur euismod ligula ac mauris vestibulum pellentesque. Suspendisse potenti. Mauris in nisi tincidunt, euismod lorem id, cursus lectus. Suspendisse laoreet a nunc sed euismod. Aliquam a mauris posuere, sodales dui sit amet, congue elit. Sed sodales ante libero, sit amet ornare metus tempus a. Donec bibendum sollicitudin neque, tempus placerat erat molestie in. Donec volutpat malesuada urna non mattis. Vivamus ut arcu pretium, pharetra nibh ac, dapibus magna. Proin rutrum quam ex, non lacinia turpis ornare quis.
                </p>
                <p className="default-card__container-secondText">
                    Nam mattis eleifend elit, nec tempor enim. In hac habitasse platea dictumst. Curabitur condimentum ipsum sit amet semper suscipit. Vestibulum consectetur sapien in massa condimentum, et porttitor magna interdum. Duis eget mollis odio, quis aliquam nunc. Vivamus elementum turpis sed ullamcorper commodo. Nulla lobortis ultricies massa nec efficitur. Quisque iaculis est dui, a aliquet mi fermentum id. Morbi in sem finibus, lobortis tortor sit amet, elementum ligula.
                </p>
            </div>
        </div>
    );
}

export default DefaultCard;