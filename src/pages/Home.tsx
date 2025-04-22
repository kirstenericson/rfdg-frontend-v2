import React from "react";
import { ButtonUsage } from "../components/ButtonUsage";
import logo from "../logo.svg";
import "../App.css";

const Home = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" style={{'filter':'invert(100%)'}} />
            <p> wah wah wee wooo </p>
            <ButtonUsage></ButtonUsage>
        </header>
    );
}
export default Home;
