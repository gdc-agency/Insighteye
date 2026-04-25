import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import ServiceOneMain from '../../components/ServiceOne/ServiceOneMain';

// Breadcrumbs Background Image

const Service = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                activeMenu="/service"
            />
            {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Our Service 1"
                    pageName="Our Service 1"
                    breadcrumbsImg={bannerbg}
                />
            {/* breadcrumb-area-start */}
            {/* ServiceOneMain */}
            <ServiceOneMain />
            {/* ServiceOneMain */}

            <Footer />
        </React.Fragment>
    );
}

export default Service;