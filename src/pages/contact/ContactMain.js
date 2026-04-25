import React from 'react';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import bgImg2 from "../../assets/images/background/contact-bg.jpg";
import icon1 from '../../assets/images/icons/icon-14.svg';
import icon2 from '../../assets/images/icons/icon-15.svg';
import icon3 from '../../assets/images/icons/icon-16.svg';
import { Link } from 'react-router-dom';


const ContactMain = () => {

        return (
            <React.Fragment>

                {/* SiteBreadcrumb */}
                <SiteBreadcrumb
                    pageTitle="Contact Us"
                    pageName="Contact Us"
                    breadcrumbsImg={bannerbg}
                />
                {/* SiteBreadcrumb */}
                {/* Contact Section Start */}

                
                {/* contact-style-two */}
                <section className="contact-style-two sec-pad-2">
                    <div
                    className="bg-layer"
                        style={{ backgroundImage: `url(${bgImg2})`
                    }}
                    />
                    <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_seven">
                            <div className="content-box">
                            <div className="sec-title mb_60">
                                <span className="sub-title">Contact Us</span>
                                <h2>Contact Info</h2>
                            </div>
                            <div className="inner-box pb_20">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <h5>Head Office:</h5>
                                    <p>New Hyde Park, NY 11040</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <h5>Opening Hours:</h5>
                                    <p>Mon - Fri 8:00AM - 6:00PM</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <h5>Phone No:</h5>
                                    <p>
                                        <Link to="tel:913336660021">(+91) 333 666 0021</Link>
                                    </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <h5>Email:</h5>
                                    <p>
                                        <Link to="mailto:example@domain.com">
                                        example@domain.com
                                        </Link>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <ul className="social-links clearfix">
                                <li>
                                <Link to="/contact">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                </li>
                                <li>
                                <Link to="/contact">
                                    <i className="fab fa-twitter" />
                                </Link>
                                </li>
                                <li>
                                <Link to="/contact">
                                    <i className="fab fa-pinterest-p" />
                                </Link>
                                </li>
                                <li>
                                <Link to="/contact">
                                    <i className="fab fa-instagram" />
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <form method="post" action="sendemail.php" id="contact-form">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" name="username" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" name="email" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Your Phone</label>
                                    <input type="text" name="phone" required="" />
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                <div className="form-group">
                                    <label>Your Message</label>
                                    <textarea name="message" defaultValue={""} />
                                </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                <button
                                    className="theme-btn btn-one"
                                    type="submit"
                                    name="submit-form"
                                >
                                    Contact With Us
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* contact-style-two end */}


                {/* Google Map Section */}
                <section className="google-map-section">
                    <div className="outer-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                            width="100%"
                            height="560"
                            style={{ border: 0, width: '100%' }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Google Map of New York, NY, USA"
                            ></iframe>
                        </div>
                    </section>
                    {/* Google Map Section End */}

            </React.Fragment>

        );
}


export default ContactMain;