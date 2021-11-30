import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Heder from '../Heder/Heder';
import MyArticle from '../MyArticle/MyArticle';
import MyWork from '../MyWork/MyWork';
import Nav from '../Sheard/Header/Nav';
const Headers = () => {
    return (
        <div>
            <Nav></Nav>
            <Heder></Heder>
            <MyWork></MyWork>
            <AboutMe></AboutMe>
            <MyArticle></MyArticle>
            <Contact></Contact>
        </div>
    );
};

export default Headers;