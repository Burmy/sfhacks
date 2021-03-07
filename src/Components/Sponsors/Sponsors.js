import React from 'react';
import './Sponsors.css'
import Adobe from '../Sponsors/sponsors-imgs/adobe.png'
import Autodesk from '../Sponsors/sponsors-imgs/autodesk.png'
import COSE from '../Sponsors/sponsors-imgs/cose.png'
import COB from '../Sponsors/sponsors-imgs/cob.png'
import Google from '../Sponsors/sponsors-imgs/google.png'
import Guru from '../Sponsors/sponsors-imgs/guru.png'
import Cahsi from '../Sponsors/sponsors-imgs/cahsi.png'
import csld from '../Sponsors/sponsors-imgs/csld-logo.png'
import Hyperx from '../Sponsors/sponsors-imgs/hyperx.png'
import Chipotle from '../Sponsors/sponsors-imgs/chipotle.png'
import Lyft from '../Sponsors/sponsors-imgs/lyft.png'
import GCloud from '../Sponsors/sponsors-imgs/google-cloud.png'
import Macys from '../Sponsors/sponsors-imgs/macys.png'
import Microsoft from '../Sponsors/sponsors-imgs/msft.png'
import StickerMule from '../Sponsors/sponsors-imgs/sticker-mule.png'
import Twilio from '../Sponsors/sponsors-imgs/twilio.png'
import IBM from '../Sponsors/sponsors-imgs/ibm.png'
import Walmart from '../Sponsors/sponsors-imgs/walmart.png'
import Notivize from '../Sponsors/sponsors-imgs/notivize.png'
import Pathrise from '../Sponsors/sponsors-imgs/pathrise.png'
import Echoar from '../Sponsors/sponsors-imgs/echoar.png'
import Wolfram from '../Sponsors/sponsors-imgs/wolf.png'
import Stream from '../Sponsors/sponsors-imgs/stream.png'
import Business from '../Sponsors/sponsors-imgs/business.png'
import Jetbrains from '../Sponsors/sponsors-imgs/jetbrains.png'
import WeightWatchers from '../Sponsors/sponsors-imgs/weight-watchers.png'

const Sponsors = () => {
    return (
        <div className="center sponsor">
            <h2 className="center mp">OUR SPONSORS</h2>
            <div className="slider-1">
                <div className="slide-track">
                    <div className="slide">
                        <img src={Adobe} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Autodesk} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Google} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={COSE} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Pathrise} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Guru} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Cahsi} height="100" width="200" alt="" />
                    </div>


                </div>
            </div>
            <div className="slider-2">
                <div className="slide-track">
                    <div className="slide">
                        <img src={Hyperx} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Microsoft} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Notivize} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Jetbrains} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Walmart} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={GCloud} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Twilio} height="100" width="200" alt="" />
                    </div>


                </div>
            </div>
            <div className="slider-3">
                <div className="slide-track">
                    <div className="slide">
                        <img src={Wolfram} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Lyft} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={IBM} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Chipotle} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={WeightWatchers} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Echoar} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={csld} height="100" width="200" alt="" />
                    </div>


                </div>
            </div>

            <div className="slider-4">
                <div className="slide-track">
                    <div className="slide">
                        <img src={Macys} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={COB} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Stream} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={StickerMule} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Macys} height="100" width="200" alt="" />
                    </div>
                    <div className="slide">
                        <img src={Business} height="100" width="200" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sponsors
