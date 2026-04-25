import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ServiceDetailsContentFour from './ServiceDetailsContentFour';


const ServiceDetailsFour = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details-4'
            />
            <ServiceDetailsContentFour />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetailsFour;