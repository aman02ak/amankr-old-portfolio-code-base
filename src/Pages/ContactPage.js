import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="map-title" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3767.947357294708!2d84.7461943!3d19.1975015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d43650f924b4f%3A0x821828cd629bb075!2sNational%20Institute%20of%20Science%20and%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1613890989505!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8521925088'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'amankr.02ak@gmail.com'} text2={'amankumar.cse.2017@nist.edu'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Room No. 410, HR1, NIST, Berhampur, Odisha'} text2={'PIN CODE- 760001'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
