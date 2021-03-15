import React, {useState} from 'react';

//component
import Select from '../commen/Select';
import Modal from '../commen/Modal';

//css
import '../../assets/styles/inputArea.css';

//img
import talktosale_shape from '../../assets/images/talktosale_shape.png';
import talktosales from '../../assets/images/talktosales.png';
import check_icon from '../../assets/images/check_icon.png';
const ContactUs = () => {
    const options = [{},{},{}];
    const [isModal, setModal] = useState(false);

    return (
        <div className="contactUs_wrap">
            <div className="contactUs">
                <img className="back1" src={talktosale_shape} alt=""/>
                <img className="back2" src={talktosales} alt="" />
                <div className="contactUs_title">
                    <h2>Talk to sales</h2>
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
                        <div className="inputArea selectArea">
                            <Select
                                placeholder="Product of interest"
                                options={options}
                            />
                        </div>
                        <p className="inputArea">
                            <input className="inputBox" type="text" placeholder="How many product do you have?" title="How many product do you have?" />
                        </p>
                        <p className="inputArea">
                            <textarea className="inputBox" type="text" placeholder="Tell us more about your products or service" title="Tell us more about your products or service" />
                        </p>
                        <p className="descArea">
                            By clicking the submit button, you agree to allow Styleai to store and process
                            the information above for contact purposes. Please read our Privacy Policy.
                        </p>
                        <p className="contact_btn" onClick={() => setModal(true)}>CONTACT US</p>
                    </div>
                </section>
            </div>
            {
                isModal &&
                <Modal clossEvent={() => setModal(false)}>
                    <p className="modal_img">
                        <img src={check_icon} alt="image"/>
                    </p>
                    <p className="modal_title">Thank you</p>
                    <p className="modal_text">You will be contacted shortly.</p>
                    <p className="modal_btn"
                        onClick={() => setModal(false)}
                    >ok</p>
                </Modal>
            }
        </div>
    )
}

export default ContactUs;