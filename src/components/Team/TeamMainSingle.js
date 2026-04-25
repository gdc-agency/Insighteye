import { useState } from 'react'
import faqShape1 from "../../assets/images/shape/shape-14.png";
import faqShape2 from "../../assets/images/shape/shape-15.png";
import faqImage1 from "../../assets/images/resource/women-1.png";

import SinglePostTwo from './SinglePostTwo';
import teamImg1 from '../../assets/images/team/team-1.jpg'
import teamImg2 from '../../assets/images/team/team-2.jpg'
import teamImg3 from '../../assets/images/team/team-3.jpg'
import teamImg4 from '../../assets/images/team/team-4.jpg'
import teamImg5 from '../../assets/images/team/team-5.jpg'
import teamImg6 from '../../assets/images/team/team-6.jpg'


const TeamMainSingle = (props) => {
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
              {/* team-style-three */}
              <section className="team-style-three team-page centred">
                <div className="auto-container">
                  <div className="sec-title mb_50">
                    <span className="sub-title">Investigator</span>
                    <h2>Our Dedicated Investigators</h2>
                  </div>
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePostTwo 
                        teamImage={teamImg1}
                        teamTitle='Marvin McKiney'
                        teamDesc='Founder'
                    />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePostTwo 
                        teamImage={teamImg2}
                        teamTitle='Albert Flores'
                        teamDesc='Manager'
                    />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePostTwo 
                        teamImage={teamImg3}
                        teamTitle='Annette Black'
                        teamDesc='Investigator'
                    />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePostTwo 
                        teamImage={teamImg4}
                        teamTitle='Annette Black'
                        teamDesc='Manager'
                    />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <SinglePostTwo 
                          teamImage={teamImg5}
                          teamTitle='Bessie Cooper'
                          teamDesc='Manager'
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <SinglePostTwo 
                          teamImage={teamImg6}
                          teamTitle='Ralph Edwards'
                          teamDesc='Investigator'
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* team-style-three end */}
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

export default TeamMainSingle;