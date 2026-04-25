import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../components/elements/CounterUp';
import VideoPopup from '../../components/elements/VideoPopup';
import ClientsSlider from '../../components/slider/ClientsSlider'
import aboutBg from "../../assets/images/shape/shape-5.png";
import aboutImg1 from "../../assets/images/resource/about-1.jpg";
import aboutImg2 from "../../assets/images/resource/about-2.jpg";
import aboutShape1 from "../../assets/images/shape/shape-6.png";
import chooseIcon1 from "../../assets/images/icons/icon-1.svg";
import chooseIcon2 from "../../assets/images/icons/icon-2.svg";
import chooseIcon3 from "../../assets/images/icons/icon-3.svg";
import chooseBg1 from "../../assets/images/shape/shape-5.png";
import chooseBg2 from "../../assets/images/shape/shape-8.png";
import videoImg from '../../assets/images/background/video-bg-2.jpg';
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import CtaSection from '../../components/Common/CtaSection';
import ctaImage from "../../assets/images/resource/men-1.png";

const AboutMain = () => {

    

    return (
        <React.Fragment>
            
        {/*about-section */}
        <section className="about-section pt_150 pb_150">
            <div className="auto-container">
                <div className="row clearfix"> 
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                            <div className="image-box mr_40 pl_80 pb_70">
                                <div className="image-shape" style={{backgroundImage:`url(${aboutBg})`}}></div>
                                <figure className="image image-1"><img src={aboutImg1} alt="" /></figure>
                                <figure className="image image-2"><img src={aboutImg2} alt="" /></figure>
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
                                    <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh ac at amet.</p>
                                </div>
                                <div className="list-inner mb_45">
                                    <div className="shape" style={{backgroundImage:`url(${aboutShape1})`}}></div>
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
                                    <Link to="/contact" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*about-section end */}

        {/*clients-section */}
        <section className="clients-section">
            <div className="auto-container">
                <ClientsSlider/>
            </div>
        </section>
        {/*clients-section end */}

        {/*chooseus-section */}
        <section className="chooseus-section pt_150 pb_150">
            <div className="pattern-layer">
                <div className="pattern-1"></div>
                <div className="pattern-2 rotate-me" style={{backgroundImage: `url(${chooseBg1})`}}></div>
                <div className="pattern-3" style={{backgroundImage:`url(${chooseBg2})`}}></div>
            </div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
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
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                        <div className="inner-content ml_50">
                            <div className="shape">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                                <div className="shape-3 rotate-me"></div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box mb_30">
                                            <div className="icon-box"><img src={chooseIcon1} alt="" /></div>
                                            <h3>Expert Investigator Agents</h3>
                                        </div>
                                    </div>
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src={chooseIcon2} alt="" /></div>
                                            <h3>Expert Investigator Agents</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src={chooseIcon3} alt="" /></div>
                                            <h3>Expert Investigator Agents</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*chooseus-section end */}

        {/*video-section */}
        <section className="video-section p_relative centred">
            <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${videoImg})`}}></div>
            <div className="auto-container">
                <div className="inner-box">
                <div className="video-btn">
                    <VideoPopup />
                </div>
                    <h2>Watch Our Private <br />Investigation</h2>
                </div>
            </div>
        </section>
        {/*video-section end */}
                        
        {/*funfact-section */}
        <section className="funfact-section">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-12"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={40} /><span>+</span>
                            </div>
                            <h3>Team members</h3>
                        </div>
                    </div>
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-7"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={98} /><span>%</span>
                            </div>
                            <h3>Project Success</h3>
                        </div>
                    </div>
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-8"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={40} /><span>k+</span>
                            </div>
                            <h3>Happy Clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*funfact-section end */}
        {/*team-section */}
        <section className="team-section sec-pad centred">
            <div className="auto-container">
                <div className="sec-title mb_50">
                    <span className="sub-title">Investigator</span>
                    <h2>Our Dedicated Investigators</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src={team1} alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link to="/team/team-details">Marvin McKiney</Link></h3>
                                    <span className="designation">Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src={team2} alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link to="/team/team-details">Albert Flores</Link></h3>
                                    <span className="designation">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src={team3} alt="" /></figure>
                                <div className="lower-content">
                                    <div className="share-box">
                                        <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                                        <ul className="social-links clearfix">
                                            <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link to="/team/team-details">Annette Black</Link></h3>
                                    <span className="designation">Investigator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*team-section end */}
        {/*cta-section */}
        <CtaSection
            ctaImage={ctaImage}
            ctaTitle='Get Professional security service.'
            ctaButtonText='Contact With Us'
            />
        {/*cta-section end */}
        </React.Fragment>
    )
}

export default AboutMain;