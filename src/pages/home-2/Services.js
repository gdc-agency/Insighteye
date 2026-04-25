import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage1 from "../../assets/images/service/service-1.jpg";
import serviceImage2 from "../../assets/images/service/service-2.jpg";
import serviceImage3 from "../../assets/images/service/service-3.jpg";

const Services = (props) => {
    return (
        
        <>
        {/*service-style-two */}
        <section className="service-style-two bg-color-1 sec-pad">
              <div className="auto-container">
                  <div className="sec-title mb_60 centred">
                      <span className="sub-title">Our Services</span>
                      <h2>Private Investigation <br />Services</h2>
                  </div>
                  <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="image"><img src={serviceImage1} alt="" /></figure>
                                      <div className="category"><span>Domestic</span></div>
                                  </div>
                                  <div className="lower-content">
                                      <h3><Link to="/service/service-details">Personal Protection</Link></h3>
                                      <p>Private investigators may also provide personal protection.</p>
                                      <div className="btn-box">
                                          <Link to="/service/service-details" className="theme-btn btn-two">Read&nbsp;More</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="image"><img src={serviceImage2} alt="" /></figure>
                                      <div className="category"><span>Domestic</span></div>
                                  </div>
                                  <div className="lower-content">
                                      <h3><Link to="/service/service-2">Infidelity Investigation</Link></h3>
                                      <p>Private investigators may also provide personal protection.</p>
                                      <div className="btn-box">
                                          <Link to="/service/service-2" className="theme-btn btn-two">Read&nbsp;More</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="image"><img src={serviceImage3} alt="" /></figure>
                                      <div className="category"><span>Domestic</span></div>
                                  </div>
                                  <div className="lower-content">
                                      <h3><Link to="/service/service-details-3">Surveillance Services</Link></h3>
                                      <p>Private investigators may also provide personal protection.</p>
                                      <div className="btn-box">
                                          <Link to="/service/service-details-3" className="theme-btn btn-two">Read&nbsp;More</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="more-btn centred pt_60">
                      <Link to="/service" className="theme-btn btn-one">View All Services</Link>
                  </div>
              </div>
          </section>
          {/*service-style-two end */}
        </>


    );
}

export default Services;

















            
