import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../assets/images/service/service-1.jpg';
import serviceIcon2 from '../../assets/images/service/service-2.jpg';
import serviceIcon3 from '../../assets/images/service/service-3.jpg';


const Service = () => {
  

    return (
       
        
        <section className="service-section bg-color-1 sec-pad centred">
          <div className="auto-container">
            
            <SectionTitle
                    sectionClass="sec-title mb_60"
                    subtitleClass="sub-title"
                    subtitle="Our Services"
                    titleClass="title"
                    title="Private Investigation <br/> Services"
                    effectClass="heading-line"
                />
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon1}
                    Title="Personal Protection" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon2}
                    Title="sobuj" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon3}
                    Title="Surveillance Services" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon3}
                    Title="Surveillance Services" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon3}
                    Title="Surveillance Services" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <SingleService
                    serviceImage={serviceIcon3}
                    Title="Surveillance Services" 
                    Text="Private investigators may also provide personal protection services,
                    such as bodyguard services."
                />
              </div>
            </div>
          </div>
        </section>
      
      
    );
}

export default Service;