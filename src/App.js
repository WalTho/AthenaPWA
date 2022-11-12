import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Background from "./Components/Layout/Background/Background.jsx";
import Loader from "./Components/Layout/Loader/Loader.jsx";
import Header from "./Components/Layout/Header/Header.jsx";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return(
        <>
            <Header />
            {loading ? (
                <div className="loader__container">
                    <Loader/>
                </div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                    </Routes>
                </BrowserRouter>
            )}
            <Background/>
        </>
    );
}

export default App;