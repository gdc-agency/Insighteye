import React from 'react';
import { Link } from 'react-router-dom';
import aboutBg1 from "../../assets/images/background/about-bg.jpg";
import aboutShape1 from "../../assets/images/shape/shape-5.png";

const About = (props) => {
    return (
        
        <>
        {/*about-style-two */}
        <section className="about-style-two sec-pad">
                <div className="bg-layer" style={{backgroundImage:`url(${aboutBg1})`}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                            <div className="content_block_three">
                                <div className="content-box ml_40">
                                    <div className="shape rotate-me" style={{backgroundImage:`url(${aboutShape1})`}}></div>
                                    <div className="sec-title mb_20">
                                        <span className="sub-title">About Us</span>
                                        <h2>Experienced Private Investigator Service.</h2>
                                    </div>
                                    <div className="text-box mb_30">
                                        <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh ac at amet.</p>
                                    </div>
                                    <div className="inner-box mb_30">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="single-item">
                                                    <div className="icon-box gradient-color"><i className="icon-9"></i></div>
                                                    <h3>Collect <br />all evidence</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="single-item">
                                                    <div className="icon-box gradient-color"><i className="icon-12"></i></div>
                                                    <h3>Strong <br />investigation team</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                                                </div>
                                            </div>
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
            {/*about-style-two end */}
        </>


    );
}

export default About;
