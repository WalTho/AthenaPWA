import React from "react";

const Background = () => {
    return (
        <div className="background">
            {[...Array(500)].map((e, i) => (
                <div key={i} className="background-stars" />
            ))}
        </div>
    );
}

export default Background;