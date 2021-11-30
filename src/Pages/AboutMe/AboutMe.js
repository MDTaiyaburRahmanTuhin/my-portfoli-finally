import React from 'react';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div>
            <h2>My Skills Set</h2>
            <div data-aos="fade-right" data-aos-duration="500" className='container' id='my-skill'>
                <div className="row align-items-center text-start">
                    <div className="col-lg-6 col-md-12 mySelf">
                        <img loading='lazy' src="https://i.ibb.co/vws82kL/Tuhin.jpg" alt="" className='skill-img' />
                        <h5>Hello , I'm</h5>
                        <h2>Taiyabur Tuhin</h2>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h4 className='color'>Skill</h4>
                        <div className='skill-tech'>
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>Node.js</span>
                            <span>React.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Redux.js</span>
                            <span>Git</span>
                            <span>Firebase</span>
                            <span>REST API</span>
                            <span>VS Code</span>
                            <span>C</span>
                        </div>
                        <h4 className='color mt-5'>I want to work with</h4>
                        <div className='skill-tech'>
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>Node.js</span>
                            <span>React.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;