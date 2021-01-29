import React, { useState } from 'react';
import './styling/Navbar.css';

function Navbar() {

    const [logoClass, setLogoClass] = useState({
        current: "container",
    });

    const [boxVisible,setBoxVisible] = useState(false);

    const handleClick = () => {
        setBoxVisible(!boxVisible);
        if(logoClass.current === "container")
            setLogoClass({
                current: logoClass.current + " change",
            });
        else
            setLogoClass({
                current: "container",
            });
    }

    return (
        <div className="Navbar">
            <ul>
                <li className="logo-symbol">S</li>
                <li className="logo-text"><span className="my-name">Shubh</span> Gupta</li>
                <li className="navigation"><a href="#">Contact</a></li>
                <li className="navigation"><a href="#">Blog</a></li>
                <li className="navigation"><a href="#">Portfolio</a></li>
                <li className="navigation"><a href="#">Resume</a></li>
                <li className="navigation"><a href="#">About Me</a></li>
                <div className="dropdown">
                    {/* <button class="dropbtn">Dropdown</button> */}
                    <div className={logoClass.current} onClick={handleClick}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className={`dropdown-content ${boxVisible ? "dropdown-content-visible" : ""}`}>
                        <a href="#">About Me</a>
                        <a href="#">Resume</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </ul>
        </div >
    )
}

export default Navbar
