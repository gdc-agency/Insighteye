
import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../components/elements/CounterUp';
import chooseImage1 from "../../assets/images/background/chooseus-bg.jpg";
import chooseShape1 from "../../assets/images/shape/shape-11.png";
import chooseShape2 from "../../assets/images/shape/shape-10.png";


const Chooseus = (props) => {
    return (
        
        <>
        {/*chooseus-style-two */}
        <section className="chooseus-style-two pt_150 pb_70">
                <div className="bg-layer" style={{backgroundImage:`url(${chooseImage1})`}}></div>
                <div className="pattern-layer">
                    <div className="pattern-1 float-bob-y" style={{backgroundImage:`url(${chooseShape1})`}}></div>
                    <div className="pattern-2"></div>
                    <div className="pattern-3 rotate-me"></div>
                </div>
                <div className="auto-container">
                    <div className="content_block_four">
                        <div className="content-box pb_70">
                            <div className="shape" style={{backgroundImage:`url(${chooseShape2})`}}></div>
                            <div className="inner-box">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">Global Investigation</span>
                                    <h2>Expert Investigators in UK with Over 27 years of experience</h2>
                                </div>
                                <div className="text-box mb_30">
                                    <p>Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.</p>
                                    <ul className="list-style-one clearfix">
                                        <li>Background Check</li>
                                        <li>Free Consultation</li>
                                        <li>Expert Agents</li>
                                    </ul>
                                </div>
                                <div className="btn-box">
                                    <Link to="/contact" className="theme-btn btn-one">Contact Us</Link>
                                </div>
                            </div>
                            <div className="funfact-inner clearfix">
                                <div className="funfact-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><div className="icon gradient-color"><i className="icon-8"></i></div></div>
                                        <div className="count-outer count-box">
                                        <CounterUp end={5} /><span>k+</span>
                                        </div>
                                        <h3>Happy Clients</h3>
                                    </div>
                                </div>
                                <div className="funfact-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><div className="icon gradient-color"><i className="icon-7"></i></div></div>
                                        <div className="count-outer count-box">
                                        <CounterUp end={98} /><span>%</span>
                                        </div>
                                        <h3>Project Success</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*chooseus-style-two end */}
        </>


    );
}

export default Chooseus;
