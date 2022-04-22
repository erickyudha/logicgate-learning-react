import React from "react";
import "../styles/hero.css";
import techPlanet from "../images/techplanet.jpg"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-img" src={techPlanet} alt="tech-planet" draggable={false} />

            <div className="hero-content">
                <div className="hero-text">
                    <h1>Learn LogicGate</h1>
                    <p>
                    Learn how to use LogicGate to solve problems.
                    </p>
                </div>
                <button className="hero-button my-button" type="button">Learn More</button>
            </div>
            
        </div>
    );
}