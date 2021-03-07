import React from 'react';
import './Navbar.css'


const Navigation = () => {
    return (
        < div className="bar" id="Navbar" >
            <svg className="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#88858546" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,96C320,107,400,149,480,154.7C560,160,640,128,720,122.7C800,117,880,139,960,128C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            {/* <div className="logo">
            </div> */}

        </ div >
    );
}

export default Navigation;
