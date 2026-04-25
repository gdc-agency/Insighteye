import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from "../../assets/images/resource/about-3.jpg";
import aboutImage2 from "../../assets/images/resource/about-4.jpg";


const About = (props) => {
    return (
        
        <>
        {/*about-style-three */}
        <section className="about-style-three pt_150 pb_150">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                                <div className="image-box pr_80 mr_40">
                                    <figure className="image image-1"><img src={aboutImage1} alt="" /></figure>
                                    <figure className="image image-2"><img src={aboutImage2} alt="" /></figure>
                                    <div className="experience-box">
                                        <h2>25+<span>Years</span></h2>
                                        <p>Of experience in the Security Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_six">
                                <div className="content-box ml_40">
                                    <div className="sec-title mb_50">
                                        <span className="sub-title">About Us</span>
                                        <h2>Experienced Private Investigators at Your Service</h2>
                                    </div>
                                    <div className="inner-box mb_50">
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <div className="icon gradient-color"><i className="icon-9"></i></div>
                                            </div>
                                            <h3>Collect all evidence</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis biben dum lacinia eu id in. Quisque </p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <div className="icon gradient-color"><i className="icon-12"></i></div>
                                            </div>
                                            <h3>Strong investigation team</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis biben dum lacinia eu id in. Quisque </p>
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
            {/*about-style-three end */}
        </>


    );
}

export default About;
