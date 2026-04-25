import React from 'react';
import { Link } from 'react-router-dom';

import SinglePost from '../../components/Case/SinglePost';

import caseImg1 from '../../assets/images/gallery/case-1.jpg'
import caseImg2 from '../../assets/images/gallery/case-2.jpg'
import caseImg3 from '../../assets/images/gallery/case-3.jpg'

import bgImg from '../../assets/images/shape/shape-12.png'
import bgImg2 from '../../assets/images/shape/shape-13.png'

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