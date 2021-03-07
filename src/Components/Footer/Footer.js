import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import facebookIcon from '../Footer/social-icons/fb.png';
import instagramIcon from '../Footer/social-icons/ig.png';
import twitterIcon from '../Footer/social-icons/tw.png';
import linkedinIcon from '../Footer/social-icons/linkedin.png';
import discordIcon from '../Footer/social-icons/discord.png';

const Footer = () => {
    const socials = [
        {
            name: 'facebook',
            icon: facebookIcon,
            link: 'https://www.facebook.com/sfhacks/',
        },
        {
            name: 'instagram',
            icon: instagramIcon,
            link: 'https://www.instagram.com/sf.hacks/?hl=en',
        },
        {
            name: 'twitter',
            icon: twitterIcon,
            link: 'https://twitter.com/sf_hacks?lang=en',
        },
        {
            name: 'linkedin',
            icon: linkedinIcon,
            link: 'https://www.linkedin.com/company/sf-hacks-sfsu/',
        },
        {
            name: 'discord',
            icon: discordIcon,
            link: 'https://discord.gg/sxQjq7SjjW',
        },
    ];

    return (
        <div className="center footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#88858546" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,96C320,107,400,149,480,154.7C560,160,640,128,720,122.7C800,117,880,139,960,128C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div style={{ background: "#88858546" }}>

                <div className="footer-box">
                    <AnchorLink href='#Navbar'>
                        <btn className="arrow-up">
                            <span className="left-arm"></span>
                            <span className="right-arm"></span>
                            <span className="arrow-slide"></span>
                            <p className="top center">Go To Top</p>
                        </btn>
                    </AnchorLink>
                </div>
                <div style={{}} className="footer-style">
                    {socials.map(social => (
                        <div key={social.name}>
                            <a href={social.link}>
                                <img src={social.icon} style={{}} className="social-icons" alt="" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="footer-main-container">
                    <p className="footer-text">Made by <a className="port-text" href="https://burmy.me/">Anmol Burmy</a> :)</p>
                </div>
            </div>


        </div >
    )
}

export default Footer

