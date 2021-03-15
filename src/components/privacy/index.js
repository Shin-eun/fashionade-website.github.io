import React, {useState} from 'react';

import '../../assets/styles/terms.css';


const Privacy = () => {
    const [isMore, setMore] = useState(false);

    return (
        <div className="terms">
            <div className="term_title">
                <h2>Privacy Policy</h2>
                <span className="sub">Thank you for using Styleai</span>
            </div>
            <section className="info">
                <sectoin className="term1">
                    <p>This Privacy Policy describes how fashioned, Inc. (“styleai”) treats personal information that styleai collects and receives from you through www.styleai.com (the “Websites”)</p>
                    <h3>Acceptance of Privacy Policy</h3>
                    <p>Each time you access, use, place an order on, or browse the Websites, you signify your acceptance of the then-current Privacy Policy. If you do not accept this Privacy Policy, you are not authorized to use the Websites and must discontinue use of the Websites immediately.</p>
                    <h3>Collection of Personal Information</h3>
                    <p>
                        The personal information that styleai collects about you may include without limitation your first and last name, home address or zip code, email address, birthdate, home telephone number, employer name, work address, gender, password, preferences for products and shopping, and other information that is not otherwise publicly available. styleai collects personal information about you whenever you visit the Websites, transact business with styleai, use styleai’ products or services, request information or materials, enter sweepstakes, contests or drawings offered by styleai, create or update your Account or Profile, upload content, make Submissions, or communicate with us. When you choose to log into the Websites using your Facebook user profile, for example, styleai may collect your name, email address, zipcode or location, and gender associated with your Facebook profile, and you consent to styleai’ access to your Facebook account information. The collection of this information enables styleai to improve its services, to keep you apprised of information and developments that you may find of interest, and to allow styleai to better understand your needs. You acknowledge that your Profile may display Personal Information to other users of the Websites and elsewhere, including your first and last name and geographic location, if you select that such information will be displayed publicly on your Profile. When you create or use an Account or</p>
                    {
                        !isMore && <span className="more_btn" onClick={() => setMore(true)}>Read the full text</span>
                    }
                </sectoin>
            </section>
            {
                isMore &&
                <section className="info">
                    <sectoin className="term1">
                        <p>Collection of Non-Personal Information</p>
                        <p>styleai automatically receives and records non-personal information on our server logs from your browser as well as through other analysis of the Websites. Non-personal information includes without limitation your Internet Protocol (“IP”) address, cookie information (as described below), the pages you request, type of computer operating system you use (e.g., Microsoft Windows or Mac OS), the type of browser you use (e.g., Firefox, Chrome, Internet Explorer), the domain name of yout Internet service provider, your activities while visiting the Websites, and the content you accessed.</p>
                    </sectoin>
                </section>
            }
        </div>
    )
}

export default Privacy;