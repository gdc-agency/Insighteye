import React from 'react';
import { Link } from 'react-router-dom';
import bgImg1 from "../../assets/images/shape/shape-16.png";
import aboutPart1 from '../../assets/images/resource/men-2.png';
import aboutPart2 from '../..//assets/images/service/service-17.jpg';
import aboutPart3 from '../../assets/images/service/service-12.jpg';
import aboutPart4 from '../../assets/images/icons/icon-10.svg';
import aboutPart5 from '../../assets/images/icons/icon-11.svg';
import aboutPart6 from '../../assets/images/icons/icon-12.svg';
import aboutPart7 from '../../assets/images/service/service-13.jpg';
import aboutPart8 from '../../assets/images/service/service-14.jpg';




const ServiceDetailsContentFour = () => {
    return (
        <React.Fragment>
            <>
            {/* service-details */}
            <section className="service-details sec-pad-2">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                    <div className="service-sidebar mr_40">
                        <div className="category-widget mb_80">
                        <ul className="category-list clearfix">
                            <li><Link to="/service-details">Personal Protection</Link>
                            </li>
                            <li>
                            <Link to="/service/service-details-2">Infidelity Investigation</Link>
                            </li>
                            <li>
                            <Link to="/service/service-details-3">Surveillance Services</Link>
                            </li>
                            <li>
                            <Link to="/service/service-details-4" className="current">CCTV Security</Link>
                            </li>
                            <li>
                            <Link to="/service/service-details-5">Security Consulting</Link>
                            </li>
                            <li>
                            <Link to="/service/service-details-6">Assets Investigation</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="support-widget">
                        <div
                            className="shape"
                            style={{
                            backgroundImage:`url(${bgImg1})`
                            }}
                        />
                        <figure className="image-layer">
                            <img src={aboutPart1} alt="" />
                        </figure>
                        <h3>
                            Need Visa Appoinment Service <br />
                            Call Us
                        </h3>
                        <p>Amet minim mollit non deserunt est sit aliqua</p>
                        <div className="phone-box">
                            <div className="icon-box">
                            <div className="icon gradient-color">
                                <i className="icon-20" />
                            </div>
                            </div>
                            <Link to="tel:7045552130127">(704)&nbsp;555-213-0127</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                    <div className="service-details-content">
                        <div className="content-one mb_70">
                        <figure className="image-box mb_35">
                            <img src={aboutPart2} alt="" />
                        </figure>
                        <div className="text-box">
                            <h2>Service Summery</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Commodo semila diam et, sollicitudin eget. Tellus velit etiam
                            elit, mi pretium eu. Suspendisse imperdiet enim ornare elit,
                            eu vestibulum enim imperdiet vives Element um habitant non mi
                            est nec nunc. Orci odio dignissim
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Commodo semila diam et, sollicitudin eget. Tellus velit etiam
                            elit, mi pretium eu. Suspendisse imperdiet enim ornare elit,
                            eu velit etiam elit, mi pretium euro. Suspendisse imperdiet
                            enim ornare elit, eu vestibulum enim imperdiet vives Element
                            um habitant non mi est nec nunc. Orci odio dignissim
                            </p>
                        </div>
                        </div>
                        <div className="content-two mb_70">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box">
                                <img src={aboutPart3} alt="" />
                            </figure>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                            <div className="text-box ml_30">
                                <h2>What is included</h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Nam quis bibendsum
                                lacinia into. Quisque porttitor tortor blandit nunc sed ac
                                id.
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
                        </div>
                        </div>
                        <div className="content-three mb_70">
                        <div className="text-box mb_40">
                            <h2>Service Features</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Commodo semila diam et, sollicitudin eget. Tellus velit etiam
                            elit, mi pretium eu. Suspendisse imperdiet enim ornare elit,
                            eu vestibulum enim imperdiet vives Element um habitant non mi
                            est nec nunc. Orci odio dignissim
                            </p>
                        </div>
                        <div className="inner-box centred">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <div className="icon-box">
                                    <img src={aboutPart4} alt="" />
                                </div>
                                <h4>Expert Investigator Agents</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <div className="icon-box">
                                    <img src={aboutPart5} alt="" />
                                </div>
                                <h4>
                                    24/7 <br />
                                    Hour Support Provide
                                </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                <div className="icon-box">
                                    <img src={aboutPart6} alt="" />
                                </div>
                                <h4>
                                    100% <br />
                                    Certified <br />
                                    Agency
                                </h4>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="content-four">
                        <div className="text-box">
                            <h2>Related Case</h2>
                        </div>
                        <div className="image-inner">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                <figure className="image-box">
                                <Link to="/case/case-details">
                                    <img src={aboutPart7} alt="" />
                                </Link>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                <figure className="image-box">
                                <Link to="/case/case-details">
                                    <img src={aboutPart8} alt="" />
                                </Link>
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* service-details end */}
            </>

        </React.Fragment>

    );
}

export default ServiceDetailsContentFour;