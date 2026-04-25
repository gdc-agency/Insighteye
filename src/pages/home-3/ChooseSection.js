import React from 'react';
import { Link } from 'react-router-dom';
import chooseImage1 from "../../assets/images/background/chooseus-bg-2.jpg";
import chooseIcon1 from "../../assets/images/icons/icon-1.svg";
import chooseIcon2 from "../../assets/images/icons/icon-3.svg";



const Choose = (props) => {
    return (
        
        <>
        {/*chooseus-style-four */}
        <section className="chooseus-style-four sec-pad-2">
                <div className="bg-layer" style={{backgroundImage:`url(${chooseImage1})`}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                            <div className="content_block_six">
                                <div className="content-box ml_110">
                                    <div className="sec-title mb_35">
                                        <span className="sub-title">Why Choose</span>
                                        <h2>We Secure business globally</h2>
                                    </div>
                                    <div className="inner-box mb_35">
                                        <div className="single-item">
                                            <div className="icon-box"><img src={chooseIcon1} alt="" /></div>
                                            <h3>Expert Investigator Agents</h3>
                                            <p>Lorem ipsum dolor consec elitan of adicing umod tempor enim.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src={chooseIcon2} alt="" /></div>
                                            <h3>24 Hour Support Provide</h3>
                                            <p>Lorem ipsum dolor consec elitan of adicing umod tempor enim.</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/contact" className="theme-btn btn-one">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*chooseus-style-four end */}
        </>


    );
}

export default Choose;
