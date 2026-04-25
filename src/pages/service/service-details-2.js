import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ServiceDetailsContentTwo from './ServiceDetailsContentTwo';


const ServiceDetailsTwo = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details-2'
            />
            <ServiceDetailsContentTwo />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetailsTwo;