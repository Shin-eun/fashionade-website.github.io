import React, { useState } from 'react';

//css
import '../../assets/styles/main.css';

//img
import crm from '../../assets/images/crm.png';
import ecommerce from '../../assets/images/ecommerce.png';
import marketing from '../../assets/images/marketing.png';
import instore from '../../assets/images/instore.png';

import basket from '../../assets/images/basket.png';
import conversion_rate from '../../assets/images/conversion_rate.png';
import increase_revenue from '../../assets/images/increase_revenue.png';

import Asset44 from '../../assets/images/Asset44.png';
import italic from '../../assets/images/italic.png';


const section2Nav = [
    { id: 'E_Commerce', nav: 'E-Commerce' },
    { id: 'CRM', nav: 'CRM' },
    { id: 'Marketing', nav: 'Marketing' },
    { id: 'In_Store', nav: 'In-Store' }
]

const Main = () => {

    const [isNav, setNav] = useState('E_Commerce');


    return (
        <main id="main">
            <section className="main_setcion1">
                <div className="main_section1_textArea">
                    <h2 className="title">
                        Style<br className="mobile"/> Inspirations<br />
                        with AI
                    </h2>
                    {/* <p className="desc pc">
                        <span>Styleai is a style recommendation software to help retailers deliver</span>
                        <span>on-brand style outfits across e-commerce, emails, ads and stores</span>
                        <span>to increase average order value.</span>
                    </p> */}
                    <p className="desc">
                        Styleai is a style recommendation software to help retailers deliver on-brand style outfits across e-commerce, emails, ads and stores to increase average order value.
                    </p>
                </div>
                <div className="main_section1_imgArea">
                    <p>
                        <i className="italic"><img src={italic} alt="" /></i>
                    </p>
                </div>
            </section>
            <section className="main_setcion2">
                <h2 className="title">What we do</h2>
                <ul className="section2_navs" >
                    {
                        section2Nav.map((data) => (
                            <li className={data.id === isNav ? "section2_nav on" : "section2_nav" }
                                key={data.id}
                                onClick={() => setNav(data.id)}
                            >
                                <span>{data.nav}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="main_section2_img">
                    {isNav === 'E_Commerce'
                        && <p>
                            <i><img src={ecommerce} alt="E-Commerce" /></i>
                            <span>We analysis customer’s behavioral data and offer various style recommendation</span>
                        </p>
                    }
                    {isNav === 'CRM'
                        && <p>
                            <i><img src={crm} alt="CRM" /></i>
                            <span>Emails how to wear the item they just bought.</span>
                        </p>
                    }
                    {isNav === 'Marketing'
                        && <p>
                            <i><img src={marketing} alt="Marketing" /></i>
                            <span>Consistently update pool of style outfit images across social channels.</span>
                        </p>
                    }
                    {isNav === 'In_Store'
                        && <p>
                            <i><img src={instore} alt="In_Store" /></i>
                            <span>Provide self-styling to customers without burden.</span>
                        </p>
                    }
                </div>
                <ul className="main_section2_botton">
                    <li>
                        <p className="main_img"><img src={basket} alt="icon" /></p>
                        <p className="percent">141%</p>
                        <p className="text">Basket Size</p>
                    </li>
                    <li>
                        <p className="main_img"><img src={conversion_rate} alt="icon" /></p>
                        <p className="percent">119%</p>
                        <p className="text">Conversion Rate</p>
                    </li>
                    <li>
                        <p className="main_img"><img src={increase_revenue} alt="icon" /></p>
                        <p className="percent">123%</p>
                        <p className="text">Increase Revenue</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main;