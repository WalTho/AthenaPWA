import React from "react";
import Header from "../Layout/Header/Header.jsx";

const Home = () => {
    return (
        <div className="home">

            {/* <div className="home-title">
                <h1 className="home-title-text">Athena</h1>
            </div> */}
            
            <Header />

            {[...Array(500)].map((e, i) => (
                <div key={i} className="home-stars" />
            ))}
        </div>

    );
}

export default Home;