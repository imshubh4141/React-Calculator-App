import React from 'react'
import './styling/Intro.css'
import mypic from './svg_files/mypic.svg'

function Intro() {
    return (
        <div className="Intro">
            <div id="my-face">
                <img src="" alt="" />
            </div>
            <div className="introduction">
                <div className="designation">Web Developer</div>
                <div className="my-name">Shubh Gupta</div>
                <div className="about-me">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa voluptatem asperiores, quod harum a ipsam. Natus
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, libero.
                </div>
                <div className="btns">
                    <button className="resume-btn">Get Resume</button>
                    <button className="contact-btn">Contact</button>
                </div>
            </div>
        </div >
    )
}

export default Intro