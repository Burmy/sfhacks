import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    const socials = [
        {
            name: 'facebook',
            // icon: facebookIcon,
            link: 'https://www.facebook.com/sfhacks/',
        },
        {
            name: 'instagram',
            // icon: instagramIcon,
            link: 'https://www.instagram.com/sf.hacks/?hl=en',
        },
        {
            name: 'twitter',
            // icon: twitterIcon,
            link: 'https://twitter.com/sf_hacks?lang=en',
        },
        {
            name: 'linkedin',
            //icon: linkedinIcon,
            link: 'https://www.linkedin.com/company/sf-hacks-sfsu/',
        },
        {
            name: 'discord',
            //icon: discordIcon,
            link: 'https://discord.gg/sxQjq7SjjW',
        },
    ];

    return (
        <div className="center footer">
            <div style={{ background: "#240246", padding: '20px 0' }}>
                <div style={{}} className="footer-style">
                    {socials.map(social => (
                        <div key={social.name}>
                            <a href={social.link}>
                                <img src={social.icon} style={{}} className="social-icons" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="footer-box">
                    <AnchorLink href='#top'>
                        <btn className="arrow-up">
                            <span className="left-arm"></span>
                            <span className="right-arm"></span>
                            <span className="arrow-slide"></span>
                            <p className="top center">Go To Top</p>
                        </btn>
                    </AnchorLink>
                </div>

                <div className="footer-main-container">
                    <a href="mailto:sfhacksteam@gmail.com"><p className="footer-text"><u>sfhacksteam@gmail.com</u></p></a>
                </div>

                <div className="footer-main-container">
                    <a href="http://mlh.io/code-of-conduct"><p className="footer-text"><u>MLH Code of Conduct</u></p></a>
                </div>

                <div className="footer-main-container">
                    {/* <span className="footer-text">Made with ♡ by SF Hacks</span> */}
                    <p className="footer-text">Made with 💜 by SF Hacks</p>
                </div>
            </div>


        </div >
    )
}

export default Footer

