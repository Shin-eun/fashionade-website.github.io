import React, {useEffect} from 'react';

//css
import '../../assets/styles/products.css';

//img
import styleAPI from '../../assets/images/styleAPI.png';

import automation from '../../assets/images/automation.png';
import growth from '../../assets/images/growth.png';
import savetime from '../../assets/images/savetime.png';

import product_1 from '../../assets/images/product_1.png';
import product_2 from '../../assets/images/product_2.png';
import product_3 from '../../assets/images/product_3.png';

import product_4 from '../../assets/images/product_4.png';
import product_5 from '../../assets/images/product_5.png';
import product_6 from '../../assets/images/product_6.png';

const Products = () => {

    useEffect(() => {
        let params = window.location.pathname;
        let type = params.split('/');
        let scroll_top  = 0;
        if (type.indexOf('with') > 0){
            scroll_top = 0;
        } else if (type.indexOf('outfits') > 0){
            scroll_top = document.getElementById('products_setcion2').offsetHeight - 70;
            console.log();
        } else if(type.indexOf('API') > 0) {
            scroll_top = document.getElementById('products_setcion3').offsetHeight;
        }

        console.log('type', scroll_top);
        window.scrollTo(0, scroll_top);
    }, [window.location.pathname]);

    return(
        <div id="products">
            <section id="products_setcion1" className="products_setcion1">
                <div className="products_section1_textArea">
                    <div className="texts">
                        <h2 className="title">
                            <span>Style it with</span>
                            <span className="sub">What to wear with</span>
                        </h2>
                        <p className="desc">
                            <span>Styleai offers various style recommendations</span>
                            <span>with a simple API to increase basket size.</span>
                        </p>
                    </div>
                </div>
                <div className="products_section1_img">
                    <p className="img product_1">
                        <img src={product_1} alt="image1"/>
                    </p>
                    <p className="img product_2">
                        <img src={product_2} alt="image2" />
                    </p>
                    <p className="img product_3">
                        <img src={product_3} alt="image3" />
                    </p>
                </div>
            </section>
            <section id="products_setcion2" className="products_setcion2">
                <div className="products_section2_img">
                    <p className="img product_6">
                        <img src={product_6} alt="image6" />
                    </p>
                    <p className="img product_5">
                        <img src={product_5} alt="image5" />
                    </p>
                    <p className="img product_4">
                        <img src={product_4} alt="image4" />
                    </p>
                </div>
                <div className="products_section2_textArea">
                    <h2 className="title">
                        <span>Style outfits</span>
                        <span className="sub">How to style it</span>
                    </h2>
                    <p className="desc">
                        <span>Styleai create more outfits in order to meet each client's</span>
                        <span>needs in a second. By adding outfits to key pages of</span>
                        <span>your website, you can provide instant style inspiration</span>
                        <span>and encourage customers to add more to their carts.</span>
                    </p>
                </div>
            </section>
            <section id="products_setcion3" className="products_setcion3">
                <h2 className="title">
                    <span>What is Style API?</span>
                </h2>
                <p className="desc">
                    <span>Style API is an application program interface that provides style inspirations</span>
                    <span>based on a combination of trend data, algorithms and styling advice.</span>
                </p>
                <p className="mainImg">
                    <img src={styleAPI} alt="image"/>
                </p>
                <ul className="info_bottom">
                    <li>
                        <p className="img"><img src={automation} alt="icon" /></p>
                        <p className="title">Automation</p>
                        <p className="text">Using API</p>
                    </li>
                    <li>
                        <p className="img"><img src={growth} alt="icon" /></p>
                        <p className="title">Save time</p>
                        <p className="text">Without manual attribution</p>
                    </li>
                    <li>
                        <p className="img"><img src={savetime} alt="icon" /></p>
                        <p className="title">Growth</p>
                        <p className="text">Increase Revenue</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Products;