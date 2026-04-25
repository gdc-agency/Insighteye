import React from 'react';
import { Link } from 'react-router-dom';

import teamImg1 from '../../assets/images/team/team-7.jpg';
import teamImg2 from '../../assets/images/icons/signature-1.png';
import bgImg1 from "../../assets/images/shape/shape-18.png";
import bgImg2 from "../../assets/images/shape/shape-17.png";
import bgImg3 from "../../assets/images/shape/shape-19.png";
import bgImg4 from "../../assets/images/shape/shape-5.png";


import testimonialShape1 from "../../assets/images/shape/shape-14.png";
import testimonialShape2 from "../../assets/images/shape/shape-15.png";
import resource1 from "../../assets/images/resource/testimonial-2.png";
import resource2 from "../../assets/images/resource/testimonial-3.png";
import resource3 from "../../assets/images/resource/testimonial-4.png";

const TeamDetailsMain = () => {
    return (

    <>
    {/* team-details */}
    <section className="team-details sec-pad-2">
        <div
            className="pattern-layer"
            style={{ backgroundImage:`url(${bgImg1})` }}
        />
        <div className="auto-container">
            <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box mr_20">
                <div
                    className="shape"
                    style={{
                    backgroundImage:`url(${bgImg2})`
                    }}
                />
                <figure className="image">
                    <img src={teamImg1} alt="images" />
                </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                <h3>Brendan Fraser</h3>
                <span className="designation">Investigator</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                    semila diam et, sollicitudin eget. Tellus velit etiam elit, mi
                    pretium eu. Suspendisse imperdiet enim ornare elit, eu vestibulum
                    enim imperdiet viverra. Element um habitant non mi est nec nunc.
                    Orci odio dignissim
                </p>
                <div className="signature">
                    <img src={teamImg2} alt="images" />
                </div>
                <div className="inner-box">
                    <div className="experience-box">
                    <h2>
                        25+ <span>Years</span>
                    </h2>
                    <p>Of experience in the Security Service</p>
                    </div>
                    <h4>Contact Details</h4>
                    <ul className="info-list clearfix mb_20">
                    <li>
                        <span>Expertise:</span> Strategy, Leadership
                    </li>
                    <li>
                        <span>Email:</span>{" "}
                        <Link to="mailto:example@gmail.com">example@gmail.com</Link>
                    </li>
                    <li>
                        <span>Phone:</span>{" "}
                        <Link to="tel:913336660021">(+91) 333 666 0021</Link>
                    </li>
                    </ul>
                    <ul className="social-links clearfix">
                    <li>
                        <Link to="/team/team-details">
                        <i className="fab fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/team/team-details">
                        <i className="fab fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/team/team-details">
                        <i className="fab fa-instagram" />
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* team-details end */}
  
    {/* team-info-section */}
    <section className="team-info-section bg-color-1 pt_120 pb_130">
        <div className="pattern-layer">
        <div
            className="pattern-1"
            style={{ backgroundImage:`url(${bgImg3})` }}
        />
        <div
            className="pattern-2"
            style={{ backgroundImage:`url(${bgImg4})`}}
        />
        <div className="pattern-3" />
        </div>
        <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 biography-column">
            <div className="biography-inner mr_70">
                <h3>Biography</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                enim justora in the mauris posuere dolor. Dolor felis sapien sit
                egestas. Ut Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis et enim Platea sed fames at egestas amet feugiat
                </p>
                <p>
                laoreet potenti integer. Viverra at maecenas convallis condimentu
                eges tas nunc sagittis eu. Semper faucibus facilisis vitae
                sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis et enim pharetra quam eu urna amet aenean. Nunc
                mattisas vitae tellus bibendum a eu, nunc.
                </p>
                <Link to="/contact" className="theme-btn btn-one">
                Contact Us
                </Link>
            </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 skills-column">
            <div className="skills-inner ml_80">
                <h3>My Skills</h3>
                <p>Mollis aliquet nisl gravida vitae dignissim sollicitudin sit nisi est ornar curabitur quam sit mi viverra vulputate elit. Felis in tristique apellente sque. Eestibulum vivamus in vitae ut pulvinar.</p>
                <div className="progress-inner">
                    <div className="progress-box">
                        <p>Management</p>
                        <div className="bar">
                            <div className="bar-inner1 count-bar" data-percent="75%"></div>
                            <div className="count-text">75%</div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <p>Public Speaking</p>
                        <div className="bar">
                            <div className="bar-inner2 count-bar" data-percent="90%"></div>
                            <div className="count-text">90%</div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <p>Problem Solving</p>
                        <div className="bar">
                            <div className="bar-inner3 count-bar" data-percent="80%"></div>
                            <div className="count-text">80%</div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <p>Strategy Planning</p>
                        <div className="bar">
                            <div className="bar-inner4 count-bar" data-percent="70%"></div>
                            <div className="count-text">70%</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* team-info-section end */}

    {/*testimonial-style-two */}
    <section className="testimonial-style-two centred sec-pad-2">
        <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: `url(${testimonialShape1})` }}></div>
            <div className="pattern-2" style={{ backgroundImage: `url(${testimonialShape2})` }}></div>
        </div>
        <div className="auto-container">
            <div className="sec-title mb_60">
            <span className="sub-title">Testimonial</span>
            <h2>Love From Client</h2>
            </div>
            <div className="inner-container">
            <div className="bxslider">
                <div className="slider-content">
                <div className="content-box">
                    <ul className="rating clearfix">
                    <li><i className="icon-19"></i></li>
                    <li><i className="icon-19"></i></li>
                    <li><i className="icon-19"></i></li>
                    <li><i className="icon-19"></i></li>
                    <li><i className="icon-18"></i></li>
                    </ul>
                    <h3 className="text">“The private investigator should provide value for the client investment. They should be cost-effective and efficient. Serenity Is Multi-Faceted Blockchain</h3>
                    <h3 className="name">Ronald Richards</h3>
                    <span className="designation">Service taker</span>
                </div>
                <div className="slider-pager">
                    <ul className="thumb-box clearfix">
                    <li>
                        <Link className="active" data-slide-index="0" to="#">
                        <figure className="thumb thumb-1"><img src={resource1} alt="" /></figure>
                        </Link>
                    </li>
                    <li>
                        <Link data-slide-index="1" to="#">
                        <figure className="thumb thumb-2"><img src={resource2} alt="" /></figure>
                        </Link>
                    </li>
                    <li>
                        <Link data-slide-index="2" to="#">
                        <figure className="thumb thumb-3"><img src={resource3} alt="" /></figure>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/*testimonial-style-two end */}


    </>

    );
}

export default TeamDetailsMain;