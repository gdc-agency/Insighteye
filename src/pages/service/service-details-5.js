import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ServiceDetailsContentFive from './ServiceDetailsContentFive';


const ServiceDetailsFive = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details-5'
            />
            <ServiceDetailsContentFive />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetailsFive;