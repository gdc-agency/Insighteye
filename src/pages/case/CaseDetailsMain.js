import React from 'react';

import SinglePost from '../../components/Case/SinglePost';

import caseImg1 from '../../assets/images/gallery/case-1.jpg'
import caseImg2 from '../../assets/images/gallery/case-2.jpg'
import caseImg3 from '../../assets/images/gallery/case-3.jpg'
import caseImg7 from '../../assets/images/gallery/case-7.jpg';
import caseImg8 from '../../assets/images/gallery/case-8.jpg';
import caseImg9 from '../../assets/images/gallery/case-9.jpg';

import caseShape1 from '../../assets/images/shape/shape-20.png'
import caseShape2 from '../../assets/images/shape/shape-21.png'

import bgImg from '../../assets/images/shape/shape-12.png'
import bgImg2 from '../../assets/images/shape/shape-13.png'

import CtaSection from '../../components/Common/CtaSection';
import ctaImage from '../../assets/images/resource/men-1.png'


const CaseDetailsMain = () => {
    return (
    <>
      {/* case-details */}
      <section className="case-details sec-pad-3">
        <div className="auto-container">
          <div className="upper-box pb_80 mb_80">
            <figure className="image-box mb_60">
              <img src={caseImg7} alt="images" />
            </figure>
            <div className="inner-box">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="text-box mr_30">
                    <h3>Project Summery</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Commodo semila diam et, sollicitudin eget. Te Tellus velit
                      etiam elit, mi pretium eu. Suspendisse imperdiet enim ornare
                      elit, eu velit etiam elit, pretium llus velit etiam elit, mi
                      pretium eu. Suspendisse imperdiet enim ornare elit, eu
                      vestibulum enim imperdi vives Element um habitant non mi est
                      nec nunc. Orci odio dignissim
                    </p>
                    <p>
                      Lorem ipsum dolor siters amet, consectetur adipiscing elit.
                      Commodo semila diam et, sollicitudin eget. Tellus velit etiam
                      elit, mi pretium eu. Suspendisse imperdiet enim ornare elit,
                      eu velit etiam elit, pretium euro. Suspendisse imperdiet enim
                      ornare elit, euro vestibulum enim imperdiet vives Element
                      umbitant non mi est nec nunc. Orci odio dignissim
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="info-box">
                    <h3>Project Details</h3>
                    <ul className="info-list clearfix">
                      <li>
                        Client: <span>Julien Walker</span>
                      </li>
                      <li>
                        Year: <span>August 30, 2021</span>
                      </li>
                      <li>
                        Location: <span>California, USA</span>
                      </li>
                      <li>
                        Service: <span>Category:</span>
                      </li>
                      <li>
                        Duration: <span>Security Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-box">
            <div className="content-one mb_100">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text-box mr_30">
                    <h2>Problems and the Issues</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nam quis bibendsum
                      lacinia into. Quisque porttitor tortor blandit nunc sed ac id.
                      Tellu velit etiam elit, pretium eu. Suspendisse imperdiet enim
                      ornare elit, eu velit etiam elit, pretium euro. Suspendisse
                      imperdiet enim ornare elit, vestibulum enim imperdiet vivesei
                      Element umbitant non mi est nec nunc. Orci odio dignissim
                    </p>
                    <ul className="list-style-one clearfix">
                      <li>Corporate event security</li>
                      <li>Consultation Professional identification</li>
                      <li>Diffusing Anti-Social Behaviour</li>
                      <li>Prevent the condition from worsening</li>
                      <li>Extra security equipment</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box pr_50">
                    <img src={caseImg8} alt="images" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="content-two">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box pl_50">
                    <img src={caseImg9} alt="images" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text-box ml_30">
                    <h2>Problems and the Issues</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nam quis bibendsum
                      lacinia into. Quisque porttitor tortor blandit nunc sed ac id.
                      Tellu velit etiam elit, pretium eu. Suspendisse imperdiet enim
                      ornare elit,
                    </p>
                    <div className="inner-box">
                      <div className="single-item">
                        <div className="icon-box">
                          <div className="icon gradient-color">
                            <i className="icon-9" />
                          </div>
                        </div>
                        <h3>Collect all evidence</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Nam quis biben dum
                          lacinia eu id in. Quisque
                        </p>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <div className="icon gradient-color">
                            <i className="icon-12" />
                          </div>
                        </div>
                        <h3>Strong investigation team</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Nam quis biben dum
                          lacinia eu id in. Quisque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* case-details end */}

      {/*case-section */}
      <section className="case-section bg-color-1 sec-pad centred">
          <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage:`url(${caseShape1})`}}></div>
              <div className="pattern-2" style={{backgroundImage:`url(${caseShape2})`}}></div>
          </div>
          <div className="auto-container">
              <div className="sec-title mb_60">
                  <span className="sub-title">Recent Cases</span>
                  <h2>Checkout Our Recently <br />Closed Cases</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                  <SinglePost 
                    caseImage={caseImg1}
                    bgImg={bgImg}
                    bgImg2={bgImg2}
                    caseTitle='Event Security'
                    caseDesc='Personal Protection.'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                  <SinglePost 
                      caseImage={caseImg2}
                      bgImg={bgImg}
                      bgImg2={bgImg2}
                      caseTitle='CCTV Security'
                      caseDesc='Personal Protection.'
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                <SinglePost 
                    caseImage={caseImg3}
                    bgImg={bgImg}
                    bgImg2={bgImg2}
                    caseTitle='Assets Investigation'
                    caseDesc='Personal Protection.'
                />
                </div>
              </div>
          </div>
      </section>
      {/*case-section end */}

      {/*cta-section */}
      <CtaSection
          ctaImage={ctaImage}
          ctaTitle='Get Professional security service.'
          ctaButtonText='Contact With Us'
          />
      {/*cta-section end */}


    </>


    );
}

export default CaseDetailsMain;