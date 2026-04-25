import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ServiceDetailsContentSix from './ServiceDetailsContentSix';


const ServiceDetailsSix = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details-6'
            />
            <ServiceDetailsContentSix />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetailsSix;