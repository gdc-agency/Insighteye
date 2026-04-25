import React from 'react';
import contractImage from "../../assets/images/background/contact-bg.jpg";
import contractIcon from "../../assets/images/icons/icon-9.svg";
import { Link } from 'react-router-dom';


const Contact = (props) => {
    return (
        
        <>
        {/*contact-section */}
        <section className="contact-section pt_100 pb_100 p_relative">
                <div className="bg-layer" style={{backgroundImage:`url(${contractImage})`}}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content_block_five">
                                <div className="content-box mr_70">
                                    <div className="sec-title light mb_25">
                                        <span className="sub-title">Contact Us</span>
                                        <h2>Get in Touch with the Team</h2>
                                    </div>
                                    <div className="text-box mb_45">
                                        <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc</p>
                                    </div>
                                    <div className="support-box">
                                        <div className="icon-box"><img src={contractIcon} alt="" /></div>
                                        <h4>Give us a Call</h4>
                                        <h3><Link to="tel:912505302">+91 250 5302</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <form method="post" action="index-2">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="left-column">
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" name="name" required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" name="email" required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Phone</label>
                                                    <input type="text" name="phone" required />
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one">Contact With Us</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="right-column">
                                                <div className="form-group">
                                                    <label>Your Message</label>
                                                    <textarea name="message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*contact-section end */}
        </>


    );
}

export default Contact;