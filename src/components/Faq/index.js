import React from 'react';
import { useState } from 'react'


const FaqMain = (props) => {
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
        {/*faq-page-section */}
        <section className="faq-page-section sec-pad-2 bg-color-1">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="content-box mr_20">
                            <div className="sec-title mb_50">
                                <span className="sub-title">Faq’s</span>
                                <h2>Frequently Asked <br />Questions</h2>
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
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="faq-sidebar">
                            <h3>Asked Your Question</h3>
                            <form method="post" action="faq" className="default-form">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="Phone number" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Type message"></textarea>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-one">Ask Question</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*faq-page-section end */}
        </>


    );
}

export default FaqMain;