import React from 'react';
import { Link } from 'react-router-dom';
import './MyArticle.css'
const MyArticle = () => {
    return (
        <div className='wrapper'>
            <h2 className='h-color'>My Artivle</h2>
            <div data-aos="fade-right" data-aos-duration="300" className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className="card bgtransparent card-articale">
                            <img src="https://i.ibb.co/4SyFttJ/routerblog.png" className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <Link to={{ pathname: "https://medium.com/@mdtaiyaburrahmantuhin99/react-b6d741105690" }} target="_blank" ><span>Read more</span></Link></p>
                            </div>
                            <div className="card-footer skill-tech d-flex justify-content-between">
                                <span>React</span>
                                <span className="text-muted">Nov 10 2021</span>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className="card bgtransparent card-articale">
                            <img src="https://i.ibb.co/Jj9Gr69/jsblog.jpg" className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <Link to={{ pathname: "https://medium.com/@mdtaiyaburrahmantuhin99/script-your-idea-with-javascript-e8bb0c4de316" }} target="_blank" ><span>Read more</span></Link></p>
                            </div>
                            <div className="card-footer skill-tech d-flex justify-content-between">
                                <span>JavaScript</span>
                                <span className="text-muted">Nov 15 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card bgtransparent card-articale">
                            <img src="https://i.ibb.co/yXznBsv/react-Blog.png" className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <Link to={{ pathname: "https://medium.com/@mdtaiyaburrahmantuhin99/understanding-the-fundamentals-of-routing-in-react-414f283a0ce5" }} target="_blank" ><span>Read more</span></Link></p>
                            </div>
                            <div className="card-footer skill-tech d-flex justify-content-between">
                                <span>React Router Dom</span>
                                <span className="text-muted">Nov 20 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArticle;

/*



*/