import React from 'react';
import { Link } from 'react-router-dom';
//css
import '../assets/styles/footer.css';

//img
import footer_logo from '../assets/images/footer_logo.png';
import instargram from '../assets/images/instargram.png';
import naver from '../assets/images/naver.png';
import kakao from '../assets/images/kakao.png';

const Footer = () => {
    const footerNavs= [
        {
            id : "footer_PROCUCTS",
            title : 'PROCUCTS',
            navs : [
                { id: 'Style_if_with', nav : 'Style if with'},
                { id: 'Style_outfits', nav: 'Style outfits' },
                { id: 'What_is_Style_API', nav: 'What is Style API' }
            ]
        }, {
            id: "footer_SOLUTIONS",
            title: 'SOLUTIONS',
            navs: [
                { id: 'Solutions', nav: 'Solutions' }
            ]
        }, {
            id: "footer_DATASETS",
            title: 'DATASETS',
            navs: [
                { id: 'Datasets', nav: 'Datasets' }
            ]
        },
        {
            id: "footer_COMPANY",
            title: 'COMPANY',
            navs: [
                { id: 'About_us', nav: 'About us' },
                { id: 'Contact_us', nav: 'Contact us' }
            ]
        },
    ]         

    return (
        <footer id="footer">
            <div className="footer_top">
                <p className="footer_logo"><span><img src={footer_logo} alt="" /></span></p>
                {
                    footerNavs.map((data)=>(
                        <div key={data.id}>
                            <p className="footer_top_title">{data.title}</p>
                            {
                                data.navs.map((i)=>(
                                    <li key={i.id}>{i.nav}</li>
                                ))
                            }
                        </div>
                    ))
                }
            </div> 
            <div className="footer_bottom">
                <p className="footer_none"></p>
                <p>© 2021 Fashionade,Inc.</p>
                <p><Link to="/Terms">Terms of Service</Link></p>
                <p><Link to="/Privacy">Privacy Policy</Link></p>
                <p className="footer_sns">
                    <span><img src={instargram} alt="instargram"/></span>
                    <span><img src={naver} alt="naver" /></span>
                    <span><img src={kakao} alt="kakao" /></span>
                </p>
            </div>
            <div className="footer_bottom footer_sns_mobile">
                <p className="footer_sns">
                    <span><img src={instargram} alt="instargram" /></span>
                    <span><img src={naver} alt="naver" /></span>
                    <span><img src={kakao} alt="kakao" /></span>
                </p>
                <p className="mobile_link">
                    <Link to="/Terms">Terms of Service</Link>
                    <Link to="/Privacy">Privacy Policy</Link>
                </p>
                <p>© 2021 Fashionade,Inc.</p>
            </div>
        </footer>
    )
}

export default Footer;
