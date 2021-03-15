import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/login.css';


import logo_color from '../../assets/images/logo_color.png';


const Login = () => {
    return (
        <div className="login">
            <header>
                <h1><Link to="/"><img src={logo_color} alt="logo"/></Link></h1>
            </header>
            <div className="login_from">
                <div className="login_right">
                    <h2>Welcome</h2>
                    <div className="form">
                        <p className="inputArea">
                            <input className="inputBox" type="email" placeholder="Email @ company.com" title="email" />
                        </p>
                        <p className="inputArea">
                            <input className="inputBox" type="password" placeholder="How many product do you have?" title="How many product do you have?" />
                        </p>
                        <Link to="/signUp" className="descArea right">
                            Forgot your password?
                        </Link>
                    </div>
                    <div className="btn_area">
                        <p className="contact_btn">SING IN</p>
                        <p className="descArea center">
                            Don’t have an account?
                            <Link to="/signUp">Create account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;