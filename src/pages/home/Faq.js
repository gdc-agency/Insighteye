import React from 'react';
import { useState } from 'react'
import faqImage1 from "../../assets/images/background/faq-bg.jpg";


const Faq = (props) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        
        <>
        {/*faq-section */}
        <section className="faq-section sec-pad">
            <div className="bg-layer" style={{backgroundImage:`url(${faqImage1})`}}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                        <div className="content-box ml_45">
                            <div className="sec-title mb_60">
                                <span className="sub-title">Faq’s</span>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <ul className="accordion-box">
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key === 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                        <div className="icon-box"><i className="icon-5"></i></div>
                                        <h4>Quick Response</h4>
                                    </div>
                                    <div className={isActive.key === 1 ? "acc-content current" : "acc-content"}>
                                    <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key === 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                        <div className="icon-box"><i className="icon-5"></i></div>
                                        <h4>Experience Consultant</h4>
                                    </div>
                                    <div className={isActive.key === 2 ? "acc-content current" : "acc-content"}>
                                    <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className={isActive.key === 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                        <div className="icon-box"><i className="icon-5"></i></div>
                                        <h4>Flexible Payment</h4>
                                    </div>
                                    <div className={isActive.key === 3 ? "acc-content current" : "acc-content"}>
                                    <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*faq-section end */}
        </>


    );
}

export default Faq;
