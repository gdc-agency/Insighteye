import React from 'react';
import { Link } from 'react-router-dom';
import caseImage1 from "../../assets/images/gallery/case-1.jpg";
import caseImage2 from "../../assets/images/gallery/case-2.jpg";
import caseImage3 from "../../assets/images/gallery/case-3.jpg";
import caseShape1 from "../../assets/images/shape/shape-12.png";
import caseShape2 from "../../assets/images/shape/shape-13.png";


const Case = (props) => {
    return (
        
        <>
        {/*case-section */}
        <section className="case-section sec-pad centred">
                <div className="auto-container">
                    <div className="sec-title mb_60">
                        <span className="sub-title">Recent Cases</span>
                        <h2>Checkout Our Recently <br />Closed Cases</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                            <div className="case-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={caseImage1} alt="" /></figure>
                                    <div className="view-btn"><Link to="/case/case-details" className="lightbox-image" data-fancybox="gallery"><i className="icon-5"></i></Link></div>
                                    <div className="content-box">
                                        <div className="shape">
                                            <div className="shape-1" style={{backgroundImage:`url(${caseShape1})`}}></div>
                                            <div className="shape-2" style={{backgroundImage:`url(${caseShape2})`}}></div>
                                        </div>
                                        <h3><Link to="/case/case-details">Event Security</Link></h3>
                                        <p>Personal Protection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                            <div className="case-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={caseImage2} alt="" /></figure>
                                    <div className="view-btn"><Link to="/case/case-details" className="lightbox-image" data-fancybox="gallery"><i className="icon-5"></i></Link></div>
                                    <div className="content-box">
                                        <div className="shape">
                                            <div className="shape-1" style={{backgroundImage:`url(${caseShape1})`}}></div>
                                            <div className="shape-2" style={{backgroundImage:`url(${caseShape2})`}}></div>
                                        </div>
                                        <h3><Link to="/case/case-details">CCTV Security</Link></h3>
                                        <p>Personal Protection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 case-block">
                            <div className="case-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={caseImage3} alt="" /></figure>
                                    <div className="view-btn"><Link to="/case/case-details" className="lightbox-image" data-fancybox="gallery"><i className="icon-5"></i></Link></div>
                                    <div className="content-box">
                                        <div className="shape">
                                            <div className="shape-1" style={{backgroundImage:`url(${caseShape1})`}}></div>
                                            <div className="shape-2" style={{backgroundImage:`url(${caseShape2})`}}></div>
                                        </div>
                                        <h3><Link to="/case/case-details">Assets Investigation</Link></h3>
                                        <p>Personal Protection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn pt_60">
                        <Link to="/case" className="theme-btn btn-one">View All Cases</Link>
                    </div>
                </div>
            </section>
            {/*case-section end */}
        </>


    );
}

export default Case;
