import React from 'react';
import { Link } from 'react-router-dom';
import './MyWork.css'
const MyWork = () => {
    return (
        <div data-aos="fade-right" id='my-work' data-aos-duration="200" className='wrapper'>
            <h2 className='h-color'>My Works</h2>
            <div className='container mt-5 p-2'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card bgtransparent card-style">
                            <img src="https://i.ibb.co/NF0sXHv/House-Keeping-Service.png" className="card-img-top w-100 img" alt="..." />
                            <div className="card-body">
                                <h4>Special Child Education</h4>
                                <p className="card-text">A special needs child is a youth who has been determined to require special attention and specific necessities that other children do not</p>
                            </div>
                            <div className='d-flex justify-content-between m-3'>
                                <Link to={{ pathname: "https://github.com/MDTaiyaburRahmanTuhin/house-keeping-service-mern-client" }} target="_blank" ><i className="fab fa-github-square bg"></i></Link>
                                <Link to={{ pathname: "https://house-keeping-service.web.app/" }} target="_blank" ><i className="fas fa-eye bg"></i></Link>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card bgtransparent card-style">
                            <img src="https://i.ibb.co/Fm0gnBw/Fish-Fish-1.png" className="card-img-top w-100 img" alt="..." />
                            <div className="card-body">
                                <h4>Aquarium Fish</h4>
                                <p className="card-text">you can buy aquarium fish and foods it's help human i can work full stack web developerment</p>
                            </div>
                            <div className='d-flex justify-content-between m-3'>
                                <Link to={{ pathname: "https://github.com/MDTaiyaburRahmanTuhin/niche-fish-buy-website-client-side" }} target="_blank" ><i className="fab fa-github-square bg"></i></Link>
                                <Link to={{ pathname: "https://wedding-websit.web.app/" }} target="_blank" ><i className="fas fa-eye bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card bgtransparent card-style">
                            <img src="https://i.ibb.co/YLz2tyx/React-App-1.png" className="card-img-top w-100 img" alt="..." />
                            <div className="card-body">
                                <h4>Animal Care</h4>
                                <p className="card-text">Animal hospital" redirects here. For the BBC television show it's help to pets animal</p>
                            </div>
                            <div className='d-flex justify-content-between m-3'>
                                <Link to={{ pathname: "https://github.com/MDTaiyaburRahmanTuhin/healthcare-with-animals-related-website" }} target="_blank" ><i className="fab fa-github-square bg"></i></Link>
                                <Link to={{ pathname: "https://doctor-bhai-ass-10.web.app/" }} target="_blank" ><i className="fas fa-eye bg"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyWork;

/*

*/