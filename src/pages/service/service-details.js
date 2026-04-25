import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import ServiceDetailsContent from './ServiceDetailsContent';


const ServiceDetails = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Personal Protection"
                pageName="Personal Protection"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            <ServiceDetailsContent />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetails;