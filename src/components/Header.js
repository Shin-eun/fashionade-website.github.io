import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

//css
import '../assets/styles/header.css';

//img
import logo from '../assets/images/logo_line.png';
import logo_color from '../assets/images/logo_color.png';
import mobileNav from '../assets/images/mobileNav.png';
import closs_icon from '../assets/images/closs_icon.png';

const Header = () => {
    const [isNav, setNav] = useState('');
    const [isBox, setBox] = useState(false);
    const [isMobileNav, setMobileNav] = useState(false);

    const navs = [
        { 
            id: 'PRODUCTS', 
            nav:'PRODUCTS', 
            list : [
                { id: 'with', nav: 'Style it with', to:'/Products/with'},
                { id: 'outfits', nav: 'Style outfits', to: '/Products/outfits' },
                { id: 'API', nav: 'What is Style API?', to: '/Products/API' }
            ]
        },
        { id: 'SOLUTIONS', nav: 'SOLUTIONS', to:"/"},
        { id: 'DATASETS', nav: 'DATASETS', to:"/Datasets"},
        { id: 'COMPANY', nav: 'COMPANY',
            list: [
                { id: 'About', nav: 'About us', to: '/Company/About' },
                { id: 'Contact', nav: 'Contact us', to: '/Company/Contact' }
            ]
        }
    ];

    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            let scroll_position = window.scrollY;
            const header = document.getElementById('header');
            if (scroll_position > 100){
                header.style.backgroundColor = "#fff";
            }else{
                header.style.backgroundColor = "rgba(0,0,0,0)";
            }
        });
    }, [window.location.pathname]);

    const selectNav = (nav) => {
        setNav(nav);
        setBox(false);
        setMobileNav(false);
    }

    console.log('isBox', isNav);
    return (
        <header id="header">
            <div className="header_wrap">
                <h1><Link to="/"><img src={logo} alt="logo" title="logo" /></Link></h1>
                <ul className="header_center">
                    {
                        navs.map((data)=>(
                            <li key={data.id} 
                            >
                                {
                                    data.list ? 
                                    <>
                                        <a onClick={() => setBox(data.id)} className={isBox === data.id ? "nav on" : "nav" }>{data.nav}</a>
                                        {
                                            isBox === data.id &&
                                            <>
                                                <p className="clossBox" onClick={() => setBox(false)}></p>
                                                <p className="navListBox">
                                                    {data.list.map((list) => (
                                                        <Link className={isNav === list.nav ? "on" : ""}
                                                            key={list.id} to={list.to}
                                                            onClick={() => selectNav(list.nav)}
                                                        >
                                                            {list.nav}
                                                        </Link>
                                                    ))}
                                                </p>
                                            </>
                                        } 
                                    </>
                                    : <Link className={isNav === data.nav ? "nav on"  : "nav" }
                                        to={data.to}
                                    >
                                        {data.nav}
                                    </Link>
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="header_right">
                    <p><Link to="/login">LOG IN</Link></p>
                    <p className="talk_to_sales"><Link to="/Talk">TALK TO SALES</Link></p>
                </div>
            </div>
            <div className="header_mobile">
                <div className="header_mobile_bar">
                    <h1><Link to="/"><img src={logo_color} alt="logo" title="logo" /></Link></h1>
                    <p className="mobileNav" onClick={() => setMobileNav(!isMobileNav)}><img src={isMobileNav ? closs_icon : mobileNav} /></p>
                </div>
                {isMobileNav && <p className="clossBox" onClick={() => setMobileNav(false)}></p> }
                {
                    isMobileNav && <div className="mobile_navbox">
                        <ul className="header_center">
                            {
                                navs.map((data) => (
                                    <li key={data.id}
                                    >
                                        {
                                            data.list ?
                                                <>
                                                    <a onClick={() => setBox(data.id)} className={isNav === data.nav ? "nav on" : "nav"}>{data.nav}</a>
                                                    {
                                                        isBox === data.id &&
                                                        <>
                                                            <p className={isBox ? "navListBox_mobile on" : "navListBox_mobile"}>
                                                                {data.list.map((list) => (
                                                                    <Link className={isNav === list.nav ? "on" : ""}
                                                                        key={list.id} to={list.to}
                                                                        onClick={() => selectNav(list.nav)}
                                                                    >
                                                                        {list.nav}
                                                                    </Link>
                                                                ))}
                                                            </p>
                                                        </>
                                                    }
                                                </>
                                                : <Link className={isNav === data.nav ? "nav on" : "nav"}
                                                    to={data.to}
                                                >
                                                    {data.nav}
                                                </Link>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="header_right">
                            <p><Link to="/login">LOG IN</Link></p>
                            <p className="talk_to_sales"><Link to="/Talk">TALK TO SALES</Link></p>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;