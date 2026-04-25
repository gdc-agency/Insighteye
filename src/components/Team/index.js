import SinglePost from './SinglePost';

import CtaSection from '../Common/CtaSection';
import ctaImage from "../../assets/images/resource/men-1.png";

import ClientsSlider1 from '../../components/slider/ClientsSlider1';

import testimonialShape1 from "../../assets/images/shape/shape-14.png";
import testimonialShape2 from "../../assets/images/shape/shape-15.png";
import resource1 from "../../assets/images/resource/testimonial-2.png";
import resource2 from "../../assets/images/resource/testimonial-3.png";
import resource3 from "../../assets/images/resource/testimonial-4.png";

import teamImg1 from '../../assets/images/team/team-1.jpg'
import teamImg2 from '../../assets/images/team/team-2.jpg'
import teamImg3 from '../../assets/images/team/team-3.jpg'
import teamImg4 from '../../assets/images/team/team-4.jpg'
import teamImg5 from '../../assets/images/team/team-5.jpg'
import teamImg6 from '../../assets/images/team/team-6.jpg'
import { Link } from 'react-router-dom';



const TeamMain = () => {

    return (
          <>
            {/* team-section */}
            <section className="team-section team-page centred">
              <div className="auto-container">
                <div className="sec-title mb_50">
                  <span className="sub-title">Investigator</span>
                  <h2>Our Dedicated Investigators</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg1}
                        teamTitle='Marvin McKiney'
                        teamDesc='Founder'
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg2}
                        teamTitle='Albert Flores'
                        teamDesc='Manager'
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg3}
                        teamTitle='Annette Black'
                        teamDesc='Investigator'
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg4}
                        teamTitle='Eleanor Pena'
                        teamDesc='Manager'
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg5}
                        teamTitle='Jacob Jones'
                        teamDesc='Manager'
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <SinglePost 
                        teamImage={teamImg6}
                        teamTitle='Esther Howard'
                        teamDesc='Investigator'
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* team-section end */}

            {/*clients-section */}
            <section className="clients-section alternat-2">
                <div className="auto-container">
                    <ClientsSlider1/>
                </div>
            </section>
            {/*clients-section end */}

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

export default TeamMain;