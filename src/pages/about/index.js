import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import AboutMain from './AboutMain';

// Breadcrumbs Background Image

const About = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='about'
                activeMenu="/about"
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="About Us"
                pageName="About Us"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            <AboutMain/>
            
            <Footer />
        </React.Fragment>
    );
}

export default About;