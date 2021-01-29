import React from 'react'
import './styling/WhatIDo.css'

function whatIDo() {
    return (
        <div>
            <h3 className="section-heading">What I Do</h3>
            <section className="whatIdo-section">
                <div className="web-design">
                    {/* <span className="logo"></span> */}
                    <h4 className="sub-heading">Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit nulla molestiae molestias suscipit aperiam possimus quibusdam similique consectetur ea illo exercitationem et, officia harum ipsa quis enim perspiciatis, voluptatibus a modi maxime. Voluptate nihil soluta explicabo ex ratione earum, hic saepe. Commodi laborum vitae minus cumque corporis eligendi rerum!</p>
                </div>
                <div className="web-app-development">
                    {/* <span className="logo"></span> */}
                    <h4 className="sub-heading">Web App Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi aliquid ab sequi, possimus nam saepe illo, mollitia cum amet enim, error eius natus magni tenetur? Asperiores at unde libero nam iusto nesciunt, voluptatum eaque voluptas tenetur provident explicabo dolore neque. Vitae eum cumque voluptate quod fugit ipsam. Cum, eaque quos.</p>
                </div>
            </section>
        </div>
    )
}

export default whatIDo
