import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Heder.css'
const Heder = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="200" className='container' style={{ paddingTop: '100px' }} id='home'>

            <div className="row align-items-center text-start">
                <div className="col-lg-6 col-md-12 p-5 mySelf">
                    <h5>Hello , I'm</h5>
                    <h2>Taiyabur Tuhin</h2>
                    <div className='d-flex'>
                        <p><i className="fas fa-arrow-alt-circle-right p-1"></i> Web Developer</p>

                        <p><i className="fas fa-arrow-alt-circle-right p-1"></i> Programmer</p>
                    </div>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <Button className='me-2'>About Me</Button>
                    <Link to={{ pathname: "https://drive.google.com/file/d/1GahNC1VGKcyN3D8AfTF8_Bz7OU0heArI/view?usp=sharing" }} target="_blank" ><Button>My Resume</Button></Link>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img loading='lazy' src="https://i.ibb.co/vws82kL/Tuhin.jpg" alt="" className='image float-end' />
                </div>
            </div>


        </div>
    );
};

export default Heder;