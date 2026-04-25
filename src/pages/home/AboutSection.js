import React from 'react';
import { Link } from 'react-router-dom';
import aboutPart1 from '../../assets/images/resource/about-1.jpg';
import aboutPart2 from '../../assets/images/resource/about-2.jpg';
import bgImg1 from "../../assets/images/shape/shape-5.png";
import bgImg2 from "../../assets/images/shape/shape-6.png";


const About = (props) => {
    return (
        
        <>
        {/* about-section */}
        <section className="about-section pt_150 pb_150">
            <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                    <div className="image-box mr_40 pl_80 pb_70">
                    <div
                        className="image-shape"
                        style={{
                            backgroundImage:`url(${bgImg1})`
                        }}
                    />
                    <figure className="image image-1">
                        <img className="main" src={aboutPart1} alt="" />
                    </figure>
                    <figure className="image image-2">
                        <img className="main" src={aboutPart2} alt="" />
                    </figure>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                    <div className="content-box ml_45">
                    <div className="sec-title mb_25">
                        <span className="sub-title mb_13">About Us</span>
                        <h2>Experienced Private Investigators at Your Service</h2>
                    </div>
                    <div className="text-box mb_35">
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Nam quis bibendum
                        lacinia eu id in. Quisque porttitor tortor blandit nunc sed ac
                        id. Mattis in nunc libero viverra. Consectetur leo nibh ac at
                        amet.
                        </p>
                    </div>
                    <div className="list-inner mb_45">
                        <div
                        className="shape"
                        style={{
                            backgroundImage:`url(${bgImg2})`
                        }}
                        />
                        <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                            <ul className="list-style-one clearfix">
                            <li>Background Check</li>
                            <li>Free Consultation</li>
                            <li>Expert Agents</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                            <ul className="list-style-one clearfix">
                            <li>Quick Response</li>
                            <li>Over 20 Years Experience</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link to="contact" className="theme-btn btn-one">
                        Contact Us
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* about-section end */}
        </>


    );
}

export default About;