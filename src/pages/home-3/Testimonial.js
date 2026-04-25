import React from 'react';
import { Link } from 'react-router-dom';
import testimonialShape1 from "../../assets/images/shape/shape-14.png";
import testimonialShape2 from "../../assets/images/shape/shape-15.png";
import resource1 from "../../assets/images/resource/testimonial-2.png";
import resource2 from "../../assets/images/resource/testimonial-3.png";
import resource3 from "../../assets/images/resource/testimonial-4.png";


const Testimonial = (props) => {
    return (
        
        <>
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

export default Testimonial;