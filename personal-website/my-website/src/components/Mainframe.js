import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import WhatIDo from './WhatIDo'
import './styling/Mainframe.css';

function Mainframe() {
    return (
        <div className="outer-div">
            <div className="Mainframe">
                <Navbar/>
                <Intro/>
                <WhatIDo/>
            </div>
        </div>
    )
}

export default Mainframe;


