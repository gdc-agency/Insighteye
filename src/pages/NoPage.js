
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import bannerbg from '../assets/images/background/page-title.jpg';
import ErrorMain from '../components/Error/ErrorMain';


// Breadcrumbs Background Image

const NoPage = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='about'
                activeMenu="/about"
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="404"
                pageName="404"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            
            <ErrorMain/>
            <Footer />
        </React.Fragment>
    );
}

export default NoPage;