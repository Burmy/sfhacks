import React from "react";
import './Hero.css'
import { Icon } from '@iconify/react';
import Link from '@iconify-icons/zmdi/linkedin';
import Mail from '@iconify-icons/zmdi/email';
import discordIcon from '@iconify-icons/mdi/discord';

import mailgo from "mailgo";

const Hero = () => {
    mailgo();

    return (
        <div className="Hero" id="#Navbar">
            <div className="Hero-box">
                <div className="hero-1">
                    <h2>This is</h2>
                    <div className="title">

                        <span className="block"></span>

                        <h1>SF HACKS<span></span></h1>
                    </div>
                    <h2>San Francisco's largest collegiate hackathon.</h2>
                    <ul className="contacts">
                        <p className="line"></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/sxQjq7SjjW">
                            <Icon icon={discordIcon} className="icon1" />
                        </a>
                        <li className="lnk">·</li>
                        <a class="dark" href="mailto:sfhacksteam@gmail.com">
                            <Icon icon={Mail} className="icon2" />
                        </a>
                        <li className="lnk">·</li>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/sf-hacks-sfsu/">
                            <Icon icon={Link} className="icon3" />
                        </a>
                        <p className="line"></p>
                    </ul>
                    <div className="apply">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <button className="btn" trailingIcon="picture_as_pdf" label="Apply">
                                Register Now
                            </button>
                        </a>
                    </div>
                </div>


                <div className="gradient-1">
                </div>
                <div className="gradient-2">
                </div>

                <div className="waves">
                </div>

                <div classname="hero-2">
                    <div className="hero-image">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;

