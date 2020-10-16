import React from 'react';

import './Landing.css';

import Navbar from '../Navbar/Navbar.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import About from '../About/About.js';
import Gallery from '../Gallery/Gallery.js';
import Contact from '../Contact/Contact.js';
import Archive from '../Archive/Archive.js';

export default Landing;

function Landing() {
    return <div>
        <Header header="Monument" subheader="A Lifestyle Magazine" link=""/>
        <Navbar />
        <Archive/>
        <About/>
        <Gallery/>
        <Contact/>
        <Footer action="Subscribe"/>
    </div>
}
