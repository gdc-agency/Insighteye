import React from 'react';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';
import CtaSection from '../Common/CtaSection';
import ctaImage from "../../assets/images/resource/men-1.png";


// Service Images
import serviceIcon1 from '../../assets/images/service/service-1.jpg';
import serviceIcon2 from '../../assets/images/service/service-2.jpg';
import serviceIcon3 from '../../assets/images/service/service-3.jpg';
import serviceIcon5 from '../../assets/images/service/service-5.jpg';
import serviceIcon6 from '../../assets/images/service/service-6.jpg';
import serviceIcon7 from '../../assets/images/service/service-7.jpg';

const ServiceOneMain = () => {
    return (
        <React.Fragment>
            <>
            {/* service-style-two */}
            <section className="service-style-two service-page bg-color-1">
                <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <span className="sub-title">Our Services</span>
                    <h2>
                    Private Investigation <br />
                    Services
                    </h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon1}
                            Title="Personal Protection" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon2}
                            Title="Infidelity Investigation" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon3}
                            Title="Surveillance Services" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon5}
                            Title="CCTV Security" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon6}
                            Title="Security Consulting" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <SingleServiceTwo
                            serviceImage={serviceIcon7}
                            Title="Assets Investigation" 
                            Text="Private investigators may also provide personal protection."
                        />
                    </div>
                </div>
                </div>
            </section>
            {/* service-style-two end */}

            {/*cta-section */}
          <CtaSection
              ctaImage={ctaImage}
              ctaTitle='Get Professional security service.'
              ctaButtonText='Contact With Us'
              />
          {/*cta-section end */}
            </>

        </React.Fragment>
    );
}

export default ServiceOneMain;