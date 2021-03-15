import React from 'react';

import '../../assets/styles/inputArea.css';

import talktosale_shape from '../../assets/images/talktosale_shape.png';
import talktosales from '../../assets/images/talktosales.png';

const ContactUs = () => {
    return (
        <div className="contactUs_wrap">
            <div className="contactUs">
                <img className="back1" src={talktosale_shape} alt=""/>
                <img className="back2" src={talktosales} alt="" />
                <div className="contactUs_title">
                    <h2>Contact us</h2>
                    <span>We'll be in touch with you shortly</span>
                </div>
                <section className="form_area">
                    <div className="from_left">
                        <h3>Have a question for Styleai? </h3>
                        <ul>
                            <li>Find the right solutions for your needs</li>
                            <li>Learn more about Styleai’s</li>
                            <li>Pricing option </li>
                        </ul>
                    </div>
                    <div className="from_right">
                        <p className="inputArea input2">
                            <input className="inputBox" type="text" placeholder="First name" title="First name" />
                            <input className="inputBox" type="text" placeholder="Last name" tutle="Last name" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="text" placeholder="Company" title="Company" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="email" placeholder="Email @ company.com" title="email" />
                        </p>
                        <p className="inputArea">
                            <textarea className="inputBox" type="text" placeholder="Tell us more about your products or service" title="Tell us more about your products or service" />
                        </p>
                        <p className="descArea">
                            By clicking the submit button, you agree to allow Styleai to store and process
                            the information above for contact purposes. Please read our Privacy Policy.
                    </p>
                        <p className="contaci_btn">CONTACT US</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactUs;