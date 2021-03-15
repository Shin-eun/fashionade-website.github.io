import React, {useState} from 'react';

import '../../assets/styles/terms.css';


const Terms = () => {
    const [isMore, setMore] = useState(false);

    return (
        <div className="terms">
            <div className="term_title">
                <h2>Terms of Service</h2>
                <span className="sub">Thank you for using Styleai</span>
            </div>
            <section className="info">
                <sectoin className="term1">
                    <p>The company.fashionade.ai websites (the “Websites”) are offered by fashioned, Inc. (“styleai”). These Terms of Use (the “Terms”), together with the Privacy Policy, describe the terms and conditions applicable to all users’ access to and use of the Websites.</p>
                    <h3>Acceptance of Terms of Use</h3>
                    <p>Please carefully read the following Terms before using the Websites. By accessing and using each Website, you acknowledge that you have read, understood and agree to be bound by these Terms which form an agreement that is effective as if you had signed it. If at any time you do not agree to these Terms, please do not access or use the Website or any of its content.</p>
                    <p>
                        YOUR ACCESS TO, USE OF AND BROWSING OF THE WEBSITES AND THEIR CONTENT ARE SUBJECT TO ALL TERMS CONTAINED IN THESE TERMS OF USE AND styleai’ PRIVACY POLICY AND ALL APPLICABLE LAWS AND REGULATIONS. IF YOU DO NOT AGREE TO THESE TERMS OF USE, YOUR PERMISSION TO ACCESS OR USE THE WEBSITES IS AUTOMATICALLY AND IMMEDIATELY REVOKED.</p>
                    <p>
                        These Terms may be revised or updated from time to time. Accordingly, you should check the Terms regularly for updates. You can determine when the Terms were last revised by referring to the “Last Revised” legend at the top of this page. Each time you access, use or browse the Websites, you signify your acceptance of the then-current Terms. Any changes in these Terms take effect upon posting and apply only to use of the Websites and information collected from you on and after Last Revised date, unless we provide notice or have other communications with you. styleai may make changes to the Websites, content, products, services or features of the Websites at any time. You understand and agree that styleai may discontinue or restrict your use of the Websites at any time for any reason or no reason with or without notice.</p>
                    {
                        !isMore && <span className="more_btn" onClick={() => setMore(true)}>Read the full text</span>
                    }
                </sectoin>
            </section>
            {
                isMore &&
                <section className="info">
                    <sectoin className="term1">
                        <h3>Age Restrictions</h3>
                        <p>In consideration of your use of the Websites, you represent that you are of an age to form a legally binding contract and you are not prohibited from receiving services under the laws of the United States or any other applicable jurisdiction.</p>
                        <p>The Websites are directed to persons 13 years of age or older. styleai and the Websites do not knowingly collect information from children under age 13. If you are under age 13, you are not permitted to use the Websites or to submit any personally identifiable information to the Websites. If you provide information to styleai through the Websites, you represent that you are 13 years of age or older. If you are between 13 and 17 years of age, when you visit, browse, use, and submit Personal Information the Websites, you represent that you have the permission of a parent or guardian to do so and who agrees to these Terms on your behalf. If you are a parent or guardian and believe styleai may have inadvertently collected personal information from your child, please notify styleai immediately by sending an email to privacy@fashionade.ai including the specific website or line of business to which your request pertains.</p>
                        <h3>Registration Guidelines</h3>
                        <p>styleai users are encouraged to use their actual names and information. Below are details outlining the guideline of registering an account at styleai:</p>
                        <p>
                            You will provide accurate and real personal information.<br/>
                            You will not create an account in someone else’s name without permission of that person.<br />
                            If your account is removed or disabled, you will not create a new account unless pre-approved by styleai.<br />
                            You will only use styleai if you are 13 years old or over.<br />
                            For communication purposes, you will keep your account and contact information up-to-date.<br />
                            You will not share your password or share accounts with another person.
                        </p>
                        <h3>Privacy Policy</h3>
                        <p>Please review the Privacy Policy for the Websites, which is incorporated in these Terms. If you do not agree with the Privacy Policy, you are not authorized to use the Website</p>
                        <h3>Privacy Policy Overview</h3>
                        <p>
                            PERSONAL INFORMATION COLLECTED<br />
-During registration we collect information that includes your name, email, location, date of birth, and gender.<br />
-Throughout your use of the styleai websites, we also collect information on your browser type, operating system, mobile carrier, and URLs from sites you may have visited immediately before or after your visit to styleai.
                        </p>
                        <p>
                            SECURITY OF PERSONAL INFORMATION<br />
                            -Your email address is completely private and never shared or sold. Your email may only be used for communication between styleai and you.<br />
                            -The combination of your full name and location is never shared or sold.
                        </p>
                        <p>
                            USES OF YOUR PERSONAL INFORMATION<br />
                        -To provide you customized information, including but not limited to, trends for people that have your characteristics, and geographic and demographic related data and information.<br />
                        -To properly identify you.<br />
                        -To communicate through email and notifications with you.<br />
                        -To enable you to share information and communicate with other users.<br />
-To enable you to receive customized offers and opportunities throughout the styleai websites.
</p>
                        <p>
                            INFORMATION THAT IS ALWAYS PUBLICLY AVAILABLE<br />
                            -Your name is always publicly available. The intention of this is so friends and family members can search for and identify you. If you are uncomfortable sharing your real name you can always delete your account.<br />
                            -Your photo is always public available. The intention of this is so friends and family members can identify you. If you are uncomfortable having your photo available to the public you may delete it at any time.
                        </p>
                        <p>
                            INFORMATION THAT IS SHARED WITH OTHER USERS<br />
                            -When you sign up to styleai, by default your closet is public. Having a public closet means other users may browse your wardrobe, and when you take an action at styleai (including but not limited to: adding an item or outfit, liking an item or outfit, adding an item to your wishlist, and wearing an outfit), the action will appear in the activity feed.<br />
                            -At any time you may change your closet, or any individual items to private. If you change an item or your entire closet to private, all future activities and items or outfits that are in your closet will be private. You can turn your closet to private in the menu section inside your closet. On any item you can select the menu option to set that item to private. Once an item or your closet is set to private, no other user will have the ability to view your closet or clothing related behavior.<br />
                            -You have the ability to have a private closet but share items publicly using email or social media.<br />
                            -You have the ability to make your closet fully public.<br />
                            -The size and price of the items you own is always kept private for you only to view, unless you choose to share it intentionally.
                        </p>
                        <p>INFORMATION THAT IS SHARED WITH styleai<br />
                        As a styleai member you fully understand that styleai is a research and analytics company and that the following information is always made available to styleai. styleai has the right to share, profit from, and delineate this information as it sees fit.<br />
                        -Item details such as brand name, purchase location, retailer, date of purchase, price, item style, color, fabric, pattern.<br />
                        -Number of times an item is worn, shared, or discussed in chats.<br />
-Details about the wearing, including location, occasion, and who was present.</p>
                        <p>
                            INFORMATION MANAGEMENT<br />
                            -At any time, you may delete your account in your account settings page.<br />
                            -Control your personal information, including your photo in your account settings page.<br />
                            -Control what messages you receive from others users in your account settings page.<br />
                            -Control what messages you receive from styleai in your account settings page.
                        </p>
                        <h3>Permitted Uses</h3>
                        <p>The Websites are made available for personal, noncommercial display and exchange of ideas, opinions and preferences relating to apparel and apparel brands. Users may interact with the Websites in several different ways: Users may register to create an Account and create personalized collections, including use of the closet feature to identify and provide opinions on apparel brands, retailers, and trends; Users with Accounts may create a Profile, a public webpage identifying the user’s name, and geographic location, where the user may upload, post, or otherwise make available through the Websites styles, trends, and brands or other information chosen by the user; and/or Users may browse the Websites, comment and post on the Websites, and share with third parties other users’ Profiles.</p>
                        <p>You agree to abide by any posted limitations relating to use, reproduction or dissemination of any information posted on the Websites. You agree not to access the Websites by any means other than through a standard web browser or mobile device. You agree not to remove, modify or obscure any acknowledgements, credits or legal notices on the Websites. Any use of the Websites in any way not expressly permitted by these Terms is prohibited, and may be actionable under United States or international law.</p>
                        <p>Special terms may apply to some products, services or features offered on the Websites, or to any sweepstakes, contests, surveys or promotions that may be offered on the Websites (collectively, the “Activities”). Such special terms or rules (which may include official rules and expiration dates) may be posted in connection with the applicable Activity. By participating in any Activity you will become subject to those terms or rules. We urge you to read the applicable terms or rules which are linked from the particular Activity, and to review our Privacy Policy which, as part of these Terms, governs any information you submit in connection with such Activities. Any special terms or rules are in addition to these Terms and, in the event of a conflict, any such terms or rules shall prevail over these Terms.</p>
                        <h3>Profile and Communication Services</h3>
                        <p>The Websites permit users to create and modify Profiles and may contain blogs, chat areas, forums, comments, rankings, communities, calendars, Activities or other message or communication facilities designed to enable you and others to communicate with other users of the Websites or styleai (collectively, “Communication Services”). You acknowledge that your submissions to the Websites, including your Profile, may be or become publicly available to others on the Websites and elsewhere. You agree only to post submissions or send and receive messages and materials that are appropriate, not confidential or private, and related to the particular Communication Service.</p>
                        <h3>Prohibited Actions</h3>
                        <p>You agree that the following actions are prohibited and constitute a material breach of these Terms. This list is not meant to be exhaustive, and styleai reserves the right to determine what types of conduct it considers to be inappropriate use of the Websites. In the case of inappropriate use, styleai may take such measures as it determines in its sole discretion.</p>
                        <p>By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:</p>
                        <p>
                            -Use the Websites for any purpose or to take any actions in violation of local, state, national, or international laws, regulations, codes, or rules.<br />
                            -Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.<br />
                            -Take any action that imposes an unreasonable or disproportionately large load on a Websites’ infrastructure or otherwise in a manner that may adversely affect performance of the Websites or restrict or inhibit any other user from using and enjoying the Communication Services or the Websites.<br />
                            -Use any Websites for unauthorized framing or linking, or via automated devices, bots, agents, scraping, scripts, intelligent search or any similar means of access to the Websites’ content.<br />
                            -Aggregate, copy, duplicate, publish, or make available any of the content of the Websites to third parties outside the Websites in any manner, except through use of the Websites’ feature permitting sharing of Profiles or other information.<br />
                            -Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.<br />
                            -Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, intentionally false, or unlawful topic, name, material, content, or information.<br />
                            -Upload or download files that contain software or other material protected by intellectual property laws or other laws, unless you own or control the rights, titles, or interests thereto or have received all necessary consents or rights.<br />
                            -Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the Websites or another’s computer.<br />
                            -Use the Websites to make available unsolicited advertising or promotional materials, spam, pyramid schemes, chain letters, or similar forms of unauthorized advertising or solicitation.<br />
                            -Harvest or otherwise collect information about others, including email addresses, without their consent.<br />
                            -Engage in any other action that, in the judgment of styleai, exposes it or any third party to potential liability or detriment of any type.
                        </p>
                        <h3>Exposure to Content</h3>
                        <p>Any content or views posted, uploaded, displayed or made available through the Websites, including on Profiles or Accounts, are strictly those of the originating author or user who is solely responsible for such content. Use of or reliance on any content is entirely at your own risk. styleai does not endorse any content posted by others nor vouch for its reliability. Under no circumstances will styleai be liable in any way for any content posted by others.</p>
                        <p>You acknowledge that styleai may or may not pre-screen content posted by others, but that it has the right (but not the obligation) in its sole discretion to pre-screen, refuse, delete, alter, repost, or move any such content, including without limitation any content that violates the Terms or is otherwise objectionable in styleai’ sole discretion. styleai shall have no liability for such handling of content. By viewing these Websites, you agree that viewing and reading the content does not violate the laws or standards imposed by your town, city, state or country.</p>
                        <p>You understand that by using these Websites, you may be exposed to Content that you may consider offensive or objectionable. You agree that you must evaluate, and bear all risks associated with, the use or exposure to any content. You further acknowledge and agree that you will not rely on any content available on or through the Website.</p>
                        <h3>Submissions</h3>
                        <p>You are solely responsible for all content, images, materials, text, and views that you post, upload, share, email, transmit or otherwise make available via the Websites, including on your Profile and Account (“Submission”). All Submissions are subject to these Terms. styleai is under no obligation to post or use any Submission and may pre-screen, refuse, delete, alter, repost, or move any Submission at any time in its sole discretion.</p>
                        <p>By making a Submission, you represent and warrant that your Submission is true, accurate and not misleading; that you own all right, title and interest, including copyright, to your Submission, and that your Submission is your own original work; that your Submission does not include the trade secret or confidential information of others, and does not infringe or violate any other person’s or entity’s rights; and that you and any other person or entity (or its owner) mentioned or shown in your Submission hereby release and hold harmless styleai from and against any and all claims concerning any use, publication, deletion, modification or distribution of the Submission or any part thereof. You must hold all necessary releases, licenses and consents concerning the contents of your Submission and all necessary rights to post, publish, distribute, or transmit your Submission.</p>
                        <p>
                            You agree that you will evaluate and bear all risks associated with your Submission and any disclosure in your Submission. Submissions will be available to the Websites’ users and to users of other websites and services throughout the world.</p>
                        <p>
                            You give permission to styleai to use images in Marketing or promotional materials, including through social media and on the styleai websites, per privacy details.</p>
                        <p>When you publish content or information with a Public closet, it means that you are allowing everyone, including people outside of styleai, to access and use that information, and to associate it with you.</p>
                        <h3>Uses of Content</h3>
                        <p>By making a Submission, you grant styleai and their licensees, assignees and designees an irrevocable, assignable, transferable, fully sub-licensable (through multiple levels of sublicensees), perpetual, world-wide, royalty-free, fully paid-up, non-exclusive license, in their sole discretion, to use, distribute, reproduce, modify, combine, adapt, publish, translate, rent, lease, sell, publicly perform, publicly display and create derivative works of your Submission (in whole or in part), along with your name or any part thereof, your city/town/village of residency, and other information from your user Profile, in styleai’ sole discretion, on the Websites or elsewhere, and to use or incorporate all or any part of your Submission into advertising, promotion, marketing, review, recommendations, research, analysis or other materials in any format or medium now known or later developed. You hereby waive any right to inspect such use and waive, release, and hold styleai and its affiliates, licensees, assignees and designees harmless against any and all claims based on privacy, publicity, defamation, misappropriation, intellectual property or similar claims for any use of your Submission.</p>
                        <p>As you user of styleai you acknowledge using the Websites for enjoyment and to manage your closet online, and that it is not a source of revenue. You hereby waive any right to revenues or proceeds that may be generated from a user clicking on an item in your closet or page at styleai.</p>
                        <h3>Notice and Procedures for Making Claims of Intellectual Property Infringement</h3>
                        <p>styleai may, in its sole discretion, disable and/or terminate use by users who infringe the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, or that your intellectual property rights have been otherwise violated, please provide styleai a Notice containing the following information:</p>
                        <p>
                            -An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;<br />
                            -A description of the copyrighted work or other intellectual property that you claim has been infringed;<br />
                            -A description of where the material that you claim is infringing is located on the Websites (providing URL(s) in the body of an email is the best way to help styleai locate content quickly);<br />
                            Your name, address, telephone number, and email address;<br />
                            -A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;<br />
                            -A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf.<br />
                            -For Notice of claims of copyright or other intellectual property infringement, styleai can be reached by sending an email to privacy@fashionade.ai.
                        </p>
                        <h3>Links to Other Websites</h3>
                        <p>The Websites may contain advertisements, postings and links to websites operated by other parties. The Websites provide these advertisements, postings and links as a convenience, and your use of other websites is at your own risk. The advertisements, postings and linked sites are not under the control of styleai which is not responsible for their content or privacy practices. Such advertisements, postings or links or references to other parties’ products or services do not imply endorsement of information, material, products or services of any other party or any other website. styleai disclaims all liability with regard to your access to and use of such information, material, products or services or transactions with such linked websites or other parties. You acknowledge and agree that styleai is not responsible or liable, directly or indirectly, for any damage, loss or other claim caused or alleged to be caused by or in connection with, access to, use of or reliance on any content available on or through any other site or resource.</p>
                        <h3>Modifications</h3>
                        <p>styleai reserves the right at any time to modify, suspend or discontinue, temporarily or permanently, the Websites, Submissions, Activities, or any portion thereof, with or without notice. You agree that styleai will not be liable to you or to any third party for any modification, suspension or discontinuance of the Website, Submissions or Activities. You should retain copies of your Submissions that you may want to save and not rely on the Website to preserve your Submissions.</p>
                        <h3>Suspension and Termination</h3>
                        <p>styleai reserves the right, at its sole discretion, immediately and without notice, to suspend, discontinue, or terminate your access to the Websites, Submissions, or any part thereof for any reason, including without limitation any breach by you of these Terms. You agree that styleai shall not be liable to you or any third party for any such suspension, discontinuance or termination.</p>
                        <h3>Proprietary Rights</h3>
                        <p>You acknowledge and agree that, as between styleai and you, all right, title, and interest in and to the Websites, including without limitation any patents, copyrights, trademarks, trade secrets, inventions, know-how, and all other intellectual property rights, are owned exclusively by styleai, its affiliates, suppliers, vendors or licensors, and are protected by United States intellectual property and other applicable laws.</p>
                        <p>The trademarks, service marks, logos, slogans, trade names and trade dress of styleai, including styleai and YOUR STYLE. SMARTER, used on the Website are proprietary to styleai. Unauthorized use of any trademark of styleai may be a violation of trademark laws. Any other trademarks, service marks, logos, trade names or designations of other parties referenced in the Websites or as part of users’ Submissions, do not constitute or imply affiliation, endorsement or recommendation by styleai of the other parties, or by the other parties of styleai, and are the trademarks or registered trademarks of the respective third parties.</p>
                        <p>YOU AGREE TO INDEMNIFY, DEFEND AND HOLD styleai AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUBSIDIARIES, AFFILIATES, LICENSORS, LICENSEES, SERVICE PROVIDERS, ADVERTISERS AND OTHERS ACTING IN CONCERT WITH THEM, HARMLESS FROM AND AGAINST ANY LOSS, LIABILITY, CLAIM OR DEMAND, INCLUDING WITHOUT LIMITATION REASONABLE ATTORNEYS’ FEES, MADE BY YOU OR ON YOUR BEHALF OR BY ANY THIRD PARTY DUE TO OR ARISING OUT OF (A) YOUR USE OF OR RELIANCE ON THE WEBSITE OR ANY CONTENT, PRODUCTS, SERVICES OR ACTIVITY, YOUR DEALINGS IN CONNECTION WITH THE WEBSITE, OR YOUR SUBMISSION(S) OR ANY MATERIALS YOU SUBMIT OR TRANSMIT TO THE WEBSITE; (B) YOUR VIOLATION OF THESE TERMS, ANY APPLICABLE LAWS, OR THE RIGHTS OF styleai OR ANY THIRD PARTY; AND (C) ANY ACTIVITY RELATED TO YOUR ACCOUNT OR PROFILE, OR ANY OTHER PERSON ACCESSING THE WEBSITE USING YOUR ACCOUNT OR PROFILE.</p>
                        <h3>Disclaimers and Limitation of Liability</h3>
                        <p>THE WEBSITES ARE PROVIDED TO YOU ON AN “AS IS”, “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. styleai MAKES NO WARRANTY AS TO THE ACCURACY, COMPLETENESS OR RELIABILITY OF ANY CONTENT AVAILABLE THROUGH THE WEBSITE, INCLUDING SUBMISSIONS. YOU ARE RESPONSIBLE FOR VERIFYING ANY INFORMATION BEFORE RELYING ON IT. USE OF THE WEBSITES IS AT YOUR SOLE RISK. styleai MAKES NO REPRESENTATIONS OR WARRANTIES THAT USE OF THE WEBSITES WILL BE UNINTERRUPTED OR ERROR-FREE. YOU ARE RESPONSIBLE FOR TAKING ALL NECESSARY PRECAUTIONS TO ENSURE THAT ANY CONTENT YOU MAY OBTAIN FROM THE WEBSITES IS FREE OF VIRUSES OR OTHER HARMFUL CODE.</p>
                        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, styleai DISCLAIMS ALL LIABILITY, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, AND FURTHER DISCLAIMS ALL LOSSES OR DAMAGES, INCLUDING WITHOUT LIMITATION INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH ACCESS TO OR USE OF THE WEBSITES OR SUBMISSIONS, EVEN IF styleai HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                        <p>Exclusions and Limitations: Because some jurisdictions do not allow limitations on how long an implied warranty lasts, or the exclusion or limitation of liability for consequential or incidental damages, the above limitations may not apply to you. This Limitation of Liability shall be to the maximum extent permitted by applicable law.</p>
                        <h3>Notice Required by California Law</h3>
                        <p>Pursuant to California Civil Code Section 1789.3, California residents are entitled to the following specific consumer rights notice:</p>
                        <p>The name, address and telephone number of the provider of this service is fashionade, Inc., 1460 Broadway, New York, NY 10036. Complaints regarding the service or requests to receive further information regarding use of this service may be sent to the above address or to privacy@fashionade.ai.</p>
                        <p>The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Boulevard, Suite S202, Sacramento, CA 95834 or by telephone at (916) 574-7950 or (800) 952-5210.</p>
                        <p>Provisions for Users Outside of the United States<br/>
Users that are not based in the United States consent to having their personal data transferred and processed in the United States.</p>
                        <h3>Governing Law and Disputes</h3>
                        <p>Any dispute between you and styleai arising out of or relating to these Terms, the Privacy Policy, or the Websites or any of their content shall be governed by, and will be construed in accordance with, the laws of the State of New York, U.S.A., without regard to choice of law principles. You irrevocably agree that the federal and state courts located in or for New York, NY, U.S.A., are the sole and exclusive forum and venue for any dispute, as the most convenient and appropriate to address any disputes, and you agree to submit to the jurisdiction and venue of such courts. You agree that to the fullest extent permitted by law: (i) no claims by you shall be joined with any other and you agree not to participate in any claim brought by others; (ii) YOU HAVE NO RIGHT OR AUTHORITY FOR ANY DISPUTE TO BE LITIGATED ON A CLASS-ACTION BASIS OR TO UTILIZE CLASS ACTION PROCEDURES; and (iii) you have no right or authority for any dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
                        <p>The Websites are controlled within the United States of America and are directed to individuals residing in the United States. Those who choose to access the Website from locations outside of the United States do so on their own initiative, and are responsible for compliance with local laws if and to the extent local laws are applicable. styleai does not represent that the Websites or their content are appropriate outside the United States of America. styleai reserves the right to limit the availability of the Websites for any person, geographic area or jurisdiction at any time in its sole discretion.</p>
                        <h3>Miscellaneous</h3>
                        <p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. styleai’ failure to act with respect to any failure by you or others to comply with these Terms does not waive styleai’ right to act with respect to subsequent or similar failures. These Terms, together with the Privacy Policy, set forth the entire understanding and agreement between you and styleai with respect to the subject matter hereof. Any cause of action or claim you may have with respect to these Terms or the Website must be commenced within six (6) months after the claim or cause of action arises or such claim or cause of action shall be barred. You may not assign or transfer your rights or obligations under this Agreement without the prior written consent of styleai, and any assignment or transfer in violation of this provision shall be null and void. styleai reserves the right to seek all remedies available at law and in equity for violations of these Terms or special terms or rules set forth on the Website, including without limitation the right to block access from a particular internet address.</p>
                        <h3>Questions?</h3>
                        <p>Please direct any questions you may have about these Terms of Use, or technical questions or problems with the Websites, to styleai at privacy@fashionade.ai.</p>
                    </sectoin>
                </section>
            }
        </div>
    )
}

export default Terms;