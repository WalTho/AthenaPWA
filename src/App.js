import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Maps from "./Components/Maps/Maps.jsx";
import CentauriMap from "./Components/Maps/Centauri/CentauriMap.jsx";
import JoinUs from "./Components/Join-us/JoinUs.jsx";
import Login from "./Components/Admin/Login/Login.jsx";
import MapSelector from "./Components/MapSelector/MapSelector.jsx";
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

    return (
        <>
            <Header/>
            {loading ? (
                <div className="loader__container">
                    <Loader/>
                </div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/maps" element={<Maps/>}/>
                        <Route path="/centauri" element={<CentauriMap/>}/>
                        <Route path="/join-us" element={<JoinUs/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            )}
            <Background/>
        </>
    );
}

export default App;