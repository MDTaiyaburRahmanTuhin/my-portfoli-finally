import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light color fixed-top">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">Taiyabur Tuhin.</Link>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-align-left"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <NavLink exact to='/' activeClassName={'active'} className="nav-link text-light">Home</NavLink> */}
                            <a href="#home" className="nav-link text-light">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink exact to='/my work' activeClassName={'active'} className="nav-link text-light">My Work</NavLink> */}
                            <a href="#my-work" className="nav-link text-light">My Work</a>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink exact to='/my skill' activeClassName={'active'} className="nav-link text-light">My Skill</NavLink> */}
                            <a href="#my-skill" className="nav-link text-light">My Skill</a>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink exact to='/contact me' activeClassName={'active'} className="nav-link text-light">Contact Me</NavLink> */}
                            <a href="#contact-me" className="nav-link text-light">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;