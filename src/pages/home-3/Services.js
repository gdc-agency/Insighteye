'use client'
import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom';
import serviceShape1 from "../../assets/images/shape/shape-10.png";
import serviceImage from "../../assets/images/service/service-4.jpg";


const Services = (props) => {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        
        <>
        {/*service-section */}
        <section className="service-style-three bg-color-1 sec-pad-2">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                        <span className="sub-title">Our Services</span>
                        <h2>Private Investigation <br />Services</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btns tab-buttons clearfix mb_90">
                            <div className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>Personal Protection</div>
                            <div className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>Infidelity Investigation</div>
                            <div className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)}>Surveillance Services</div>
                            <div className={activeIndex === 4 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(4)}>Event Protection</div>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex === 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box mr_70">
                                            <h2>Personal Protection</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                            <ul className="list-style-one clearfix">
                                                <li>Background Check</li>
                                                <li>Quick Response</li>
                                                <li>Free Consultation</li>
                                                <li>Over 20 Years Experience</li>
                                                <li>Expert Agents</li>
                                            </ul>
                                            <Link to="/home-3" className="theme-btn btn-one">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box">
                                            <div className="shape" style={{backgroundImage: `url(${serviceShape1})`}}></div>
                                            <figure className="image"><img src={serviceImage} alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box mr_70">
                                            <h2>Infidelity Investigation</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                            <ul className="list-style-one clearfix">
                                                <li>Background Check</li>
                                                <li>Quick Response</li>
                                                <li>Free Consultation</li>
                                                <li>Over 20 Years Experience</li>
                                                <li>Expert Agents</li>
                                            </ul>
                                            <Link to="/home-3" className="theme-btn btn-one">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box">
                                            <div className="shape" style={{backgroundImage: `url(${serviceShape1})`}}></div>
                                            <figure className="image"><img src={serviceImage} alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box mr_70">
                                            <h2>Surveillance Services</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                            <ul className="list-style-one clearfix">
                                                <li>Background Check</li>
                                                <li>Quick Response</li>
                                                <li>Free Consultation</li>
                                                <li>Over 20 Years Experience</li>
                                                <li>Expert Agents</li>
                                            </ul>
                                            <Link to="/home-3" className="theme-btn btn-one">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box">
                                            <div className="shape" style={{backgroundImage: `url(${serviceShape1})`}}></div>
                                            <figure className="image"><img src={serviceImage} alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box mr_70">
                                            <h2>Event Protection</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                            <ul className="list-style-one clearfix">
                                                <li>Background Check</li>
                                                <li>Quick Response</li>
                                                <li>Free Consultation</li>
                                                <li>Over 20 Years Experience</li>
                                                <li>Expert Agents</li>
                                            </ul>
                                            <Link to="/home-3" className="theme-btn btn-one">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box">
                                            <div className="shape" style={{backgroundImage: `url(${serviceShape1})`}}></div>
                                            <figure className="image"><img src={serviceImage} alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*service-sectione end */}
        </>


    );
}

export default Services;