import React from 'react';
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
//import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Aman Kumar.</span><hr></hr><br></br>
                </h1>
                <p className="h-sub-text">
                    I am a final year student with a demonstrated history of working on various live projects.<br></br>
                    Skilled in Data Science, Machine Learning, React Framework and Leadership.<br></br>
                    Strong Engineering professional with a Bachelor's degree focused in Computer Science.
                </p>
                <div className="icons">
                    <Link to={{ pathname:"https://www.facebook.com/profile.php?id=100054601454253" }} target = "_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link to={{ pathname: "https://github.com/rickydubey" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/amankr02" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
