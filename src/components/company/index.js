import React, { useEffect} from 'react';

//css
import '../../assets/styles/company.css';

//img
import fashionseoul from '../../assets/images/fashionseoul.png';
import kaist from '../../assets/images/kaist.png';
import kidp from '../../assets/images/kidp.png';
import nipa from '../../assets/images/nipa.png';
import science_ict from '../../assets/images/science_ict.png';
import Styletech_logo from '../../assets/images/Styletech_logo.png';

const Company = () => {
    const partners = [
        { id: 'kaist', src: kaist },
        { id: 'kidp', src: kidp },
        { id: 'fashionseoul', src: fashionseoul},
        { id: 'Styletech_logo', src: Styletech_logo },
        { id: 'nipa', src: nipa},
        { id: 'science_ict', src: science_ict},
    ]

    useEffect(() => {
        let params = window.location.pathname;
        let type = params.split('/');
        let scroll_top = 0;
        if (type.indexOf('About') > 0) {
            scroll_top = 0;
        } else if (type.indexOf('Contact') > 0) {
            scroll_top = document.getElementById('companys_setcion2').offsetHeight - 70;
        }

        window.scrollTo(0, scroll_top);
    }, [window.location.pathname]);

    return(
        <div id="company">
            <section className="companysetcion1">
                <div className="company_section1_textArea">
                    <div className="texts">
                        <h2 className="title">
                            <span>Styleai</span>
                            <span className="sub">Who we are</span>
                        </h2>
                        <p className="desc">
                            <span>Founded in 2020, Fashionade is the styling technology</span>
                            <span>partner to the fashion retailers.</span>
                            <span>Styleai helps retailers deliver thousands of on-brand</span>
                            <span>outfit recommendations to every customer, across</span>
                            <span>e-commerce, emails, ads, and stores, through a powerful</span>
                            <span>combination of algorithms, trend data, and stylist expertise.</span>
                        </p>
                    </div>
                </div>
            </section>
            <section id="companys_setcion2" className="companys_setcion2">
                <div className="companys_section2_textArea">
                    <div className="texts">
                        <h2 className="title">
                            <span>Our service</span>
                            <span className="sub">What we do</span>
                        </h2>
                        <p className="desc">
                            <span>Built as the definitive styling solution for retailers, we</span>
                            <span>offers end-to-end suite of services, technology, and</span>
                            <span>expert support. All Fashionade clients get dedicated</span>
                            <span>stylists and account managers to ensure our service</span>
                            <span>meets. No custom technology needed.</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="partners">
                <h2>Partners</h2>
                <ul>
                    {
                        partners.map((img)=>(
                            <li key={img.id}>
                                <img src={img.src} alt={img.id}/>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default Company;