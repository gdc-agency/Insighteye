import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ServiceDetailsContentThree from './ServiceDetailsContentThree';


const ServiceDetailsThree = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/service-details-3'
            />
            <ServiceDetailsContentThree />
            <Footer />
        </React.Fragment>

    );
}


export default ServiceDetailsThree;