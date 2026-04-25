import React from 'react';
import aboutPart1 from '../../assets/images/icons/icon-1.svg';
import aboutPart2 from '../../assets/images/icons/icon-2.svg';
import aboutPart3 from '../../assets/images/icons/icon-3.svg';
import bgImg1 from "../../assets/images/shape/shape-5.png";
import bgImg2 from "../../assets/images/shape/shape-8.png";
import { Link } from 'react-router-dom';

const Choose = (props) => {
    return (
        
        <>
        {/* ChooseusSection */}
        <section className="chooseus-section pt_150 pb_150">
          <div className="pattern-layer">
            <div className="pattern-1" />
            <div
              className="pattern-2 rotate-me"
              style={{
                backgroundImage:`url(${bgImg1})`
            }}
            />
            <div
              className="pattern-3"
              style={{ backgroundImage: `url(${bgImg2})`
             }}
            />
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
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Nam quis bibendum
                        lacinia id in. Quisque porttitor tortor blandit nunc sed ac
                        id. Mattis in nunc libero viverra. Consectetur leo nibh amet.
                      </p>
                      <Link to="/contact" className="theme-btn btn-one">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div className="inner-content ml_50">
                  <div className="shape">
                    <div className="shape-1" />
                    <div className="shape-2" />
                    <div className="shape-3 rotate-me" />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                      <div className="chooseus-block-one">
                        <div className="inner-box mb_30">
                          <div className="icon-box">
                            <img src={aboutPart1} alt="" />
                          </div>
                          <h3>Expert Investigator Agents</h3>
                        </div>
                      </div>
                      <div className="chooseus-block-one">
                        <div className="inner-box">
                          <div className="icon-box">
                            <img src={aboutPart2} alt="" />
                          </div>
                          <h3>Expert Investigator Agents</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                      <div className="chooseus-block-one">
                        <div className="inner-box">
                          <div className="icon-box">
                                <img src={aboutPart3} alt="" />
                          </div>
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
        {/* chooseus-section end */}
      </>
      


    );
}

export default Choose;