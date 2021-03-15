import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../commen/Select';

import '../../assets/styles/login.css';

import logo_color from '../../assets/images/logo_color.png';


const Password = () => {
    return (
        <div className="login signUp">
            <header>
                <h1><Link to="/"><img src={logo_color} alt="logo" /></Link></h1>
            </header>
            <div className="login_from">
                <div className="login_right">
                    <h2>Hello</h2>
                    <div className="form">
                        <p className="inputArea">
                            <input className="inputBox" type="email" placeholder="Email @ company.com" title="email" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="password" placeholder="Password" title="Password" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="password" placeholder="Password confirm" title="Password confirm" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="text" placeholder="Company name" title="Company name" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="text" placeholder="Name" title="Name" />
                        </p>
                        <div className="inputArea number">
                            <Select
                                options={[{},{},{}]}
                                placeholder="+82"
                            />
                            <p className="numberInput"><input className="inputBox" type="tell" placeholder="Number" title="Number" /></p>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            <label>I accept the <Link to="/Terms">Terms of service</Link> and <Link to="/Privacy">Privacy policy.</Link></label>
                        </div>
                    </div>
                    <div className="btn_area">
                        <p className="contact_btn">SING IN</p>
                        <p className="descArea center">
                            Have an account?
                            <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;