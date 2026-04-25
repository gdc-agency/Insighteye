import React from 'react';
import { useState } from 'react'
import faqShape1 from "../../assets/images/shape/shape-14.png";
import faqShape2 from "../../assets/images/shape/shape-15.png";
import faqImage1 from "../../assets/images/resource/women-1.png";


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
        {/*faq-style-two */}
        <section className="faq-style-two bg-color-1 sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage:`url(${faqShape1})`}}></div>
                <div className="pattern-2" style={{backgroundImage:`url(${faqShape2})`}}></div>
            </div>
            <figure className="image-layer"><img src={faqImage1} alt="" /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_30">
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
        {/*faq-style-two end */}
        </>


    );
}

export default Faq;
