import React from 'react';
import { Link } from 'react-router-dom';
import chooseImage1 from "../../assets/images/shape/shape-5.png";
import chooseIcon1 from "../../assets/images/icons/icon-1.svg";
import chooseIcon2 from "../../assets/images/icons/icon-3.svg";
import chooseIcon3 from "../../assets/images/icons/icon-2.svg";


const Chooseus = (props) => {
    return (
        
        <>
        {/*chooseus-style-three */}
        <section className="chooseus-style-three sec-pad-2">
                <div className="pattern-layer">
                    <div className="pattern-1"></div>
                    <div className="pattern-2 rotate-me" style={{backgroundImage: `url(${chooseImage1})`}}></div>
                    <div className="pattern-3"></div>
                    <div className="pattern-4"></div>
                </div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box mr_70">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">Why Choose</span>
                                    <h2>Several Reasons why You Choose a Private Investigator.</h2>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                    <Link to="/contact" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="inner-box mr_50">
                                <div className="single-item">
                                    <div className="icon-box"><img src={chooseIcon1} alt="" /></div>
                                    <h4>Expert Investigator Agents</h4>
                                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                                </div>
                                <div className="single-item ml_50">
                                    <div className="icon-box"><img src={chooseIcon2} alt="" /></div>
                                    <h4>24 Hour Support Provide</h4>
                                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><img src={chooseIcon3} alt="" /></div>
                                    <h4>100% Certified Agency</h4>
                                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*chooseus-style-three end */}
        </>


    );
}

export default Chooseus;
