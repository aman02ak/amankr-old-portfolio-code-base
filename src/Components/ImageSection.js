import React from 'react';
import about from '../img/about.jpg';
import cv from '../img/cv_2021.pdf';

function ImageSection() {
    const onClick = () => {
        window.location.href = cv
    }
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Aman Kumar</span></h4>
                <p className="about-text">
                    I am final year student with a demonstrated history of working on various live projects. 
                    Skilled in Data Science, Machine Learning, React Framework and Leadership.
                    Strong Engineering professional with a Bachelor's degree focused in Computer Science.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>College</p>
                        <p>Stream</p>
                        <p>Speciality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Nationality</p>
                    </div>
                    <div className="right-section">
                        <p>: Aman Kumar</p>
                        <p>: 22</p>
                        <p>: National Institue of Science and Technology</p>
                        <p>: Bachelor's of Technology</p>
                        <p>: Computer Science & Technology</p>
                        <p>: English, Hindi, Bhojpuri</p>
                        <p>: Room No. 410, HR-1, NIST, Berhampur</p>
                        <p>: Indian</p>
                    </div>
                </div>
                <button className="btn" onClick= {onClick}>Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
