import SinglePost from './SinglePost';

import CtaSection from '../Common/CtaSection'
import ctaImage from '../../assets/images/resource/men-1.png'

import caseImg1 from '../../assets/images/gallery/case-1.jpg'
import caseImg2 from '../../assets/images/gallery/case-2.jpg'
import caseImg3 from '../../assets/images/gallery/case-3.jpg'
import caseImg4 from '../../assets/images/gallery/case-4.jpg'
import caseImg5 from '../../assets/images/gallery/case-5.jpg'
import caseImg6 from '../../assets/images/gallery/case-6.jpg'


import bgImg from '../../assets/images/shape/shape-12.png'
import bgImg2 from '../../assets/images/shape/shape-13.png'


const CaseMain = () => {

    return (
      <>
        {/* case-section */}
        <section className="case-section case-page centred">
          <div className="auto-container">
            <div className="sec-title mb_60">
              <span className="sub-title">Recent Cases</span>
              <h2>
                Checkout Our Recently <br />
                Closed Cases
              </h2>
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
              <div className="col-lg-4 col-md-6 col-sm-12 case-block">
              <SinglePost 
                  caseImage={caseImg4}
                  bgImg={bgImg}
                  bgImg2={bgImg2}
                  caseTitle='Security Consulting'
                  caseDesc='Personal Protection.'
              />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 case-block">
              <SinglePost 
                  caseImage={caseImg5}
                  bgImg={bgImg}
                  bgImg2={bgImg2}
                  caseTitle='Assets Investigation'
                  caseDesc='Personal Protection.'
              />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 case-block">
              <SinglePost 
                  caseImage={caseImg6}
                  bgImg={bgImg}
                  bgImg2={bgImg2}
                  caseTitle='Assets Investigation'
                  caseDesc='Personal Protection.'
              />
              </div>
            </div>
          </div>
        </section>
        {/* case-section end */}

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

export default CaseMain;