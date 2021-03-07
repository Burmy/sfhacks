import React from 'react'
import './Track.css'

const Track = () => {
    return (
        <div className="projects center" id="Tracks" >
            <div className="project-box">
                <h2 className="center mp"><p className="line-title"></p>TRACKS<p className="line-title"></p></h2>
                <div className="center project-card ">
                    <div className="center project-image">
                        <div className="img-education">
                        </div>
                    </div>
                    <div className="center project-data">
                        <h2 className="name">EDUCATION</h2>
                        <p className="info">Due to the pandemic, many of us around the globe are struggling to adapt to this environment. We challenge our hackers to rethink their own experiences in school and explore ways to better society’s approach to Education. </p>
                    </div>
                </div>


                <div className="center project-card ">

                    <div className="center project-data-opp">
                        <h2 className="name-opp">COMMUNICATION</h2>
                        <p className="info-opp">From families across the world to friends across a state, we are constricted to communication via technology. We want our hackers to find hacks to help rebuild the bridge to Communication.</p>
                    </div>
                    <div className="center project-image">
                        <div className="img-comm">
                        </div>
                    </div>
                </div>


                <div className="center project-card ">
                    <div className="center project-image">
                        <div className="img-health">
                        </div>
                    </div>
                    <div className="center project-data">
                        <h2 className="name">HEALTH</h2>
                        <p className="info">With more than half the nation lacking in healthcare, the strive for solutions is more prevalent than ever. This challenge is crafted for hackers who want to explore Health Hacks.</p>

                    </div>
                </div>


                <div className="center project-card ">

                    <div className="center project-data-opp">
                        <h2 className="name-opp">HOME</h2>
                        <p className="info-opp">We have learned how to work, teach, study, and entertain from the comfort of our household. We challenge our hackers to reflect on their own newfound skill set and produce applications to improve one’s life from Home.</p>

                    </div>
                    <div className="center project-image">
                        <div className="img-home">
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Track
