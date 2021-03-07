import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className="faq">
            <h2 className="center mp"><p className="line-title"></p>FAQs<p className="line-title"></p></h2>
            <div className="col">
                <div className="tabs">
                    <div className="tab">
                        <input type="checkbox" id="chck1" />
                        <label className="tab-label" for="chck1">What is a hackathon?</label>
                        <div className="tab-content">
                            A hackathon is an event where individuals create innovative projects via technology in a short time period. There are competitions, games, workshops, and so much more. A truly great way to expose yourself to the world of computer science!
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck2" />
                        <label className="tab-label" for="chck2">Why should I attend a virtual hackathon?</label>
                        <div className="tab-content">
                            A virtual hackathon highlights the accessibility of the online format. You can compete from anywhere, network with high tech representatives with a click of a button, and it’s all in the comfort of your own home. You control when you leave, join, sleep, eat, and so much more.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck3" />
                        <label className="tab-label" for="chck3">Do you need to know how to code to attend?</label>
                        <div className="tab-content">
                            No prior knowledge of computer science is needed! We encourage all levels of coders to attend and will have workshops, mentors, and beginner categories to help all hackers find their start in CS.

                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck4" />
                        <label className="tab-label" for="chck4">Will you host an in-person hackathon?</label>
                        <div className="tab-content">
                            To cope with the current climate, we have decided to cancel our March 2020 hackathon and postpone it to the Spring of 2021. It will be virtual but will be our most unique one yet.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck5" />
                        <label className="tab-label" for="chck5">Is SF Hacks 2021 free and what are the benefits of joining?</label>
                        <div className="tab-content">
                            For our upcoming virtual hackathon, admission is free of charge. We will have workshops held by big tech companies, recruiters scouting for potential employees, opportunities for resume boosters, places to network with professionals/professors, game rooms, and so much more! All of this and it’s free of charge? What a steal. ;)
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck6" />
                        <label className="tab-label" for="chck6">What are some benefits of joining?</label>
                        <div className="tab-content">
                            By participating in our annual hackathons, you’ll be able to create new memories, meet other hackers, gain coding experience, as well as being able to say you attended our event!
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck7" />
                        <label className="tab-label" for="chck7">What is the cost of attendance?</label>
                        <div className="tab-content">
                            It's a free event hosted by the SF Hacks Team at San Francisco State University.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" id="chck8" />
                        <label className="tab-label" for="chck8">Where can I contact the officers?</label>
                        <div className="tab-content">
                            You can email us at sfhacksteam@gmail.com. If it’s urgent, join our Discord (link in our footer) and send us a message. One of us will help within 24 hours!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
