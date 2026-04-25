import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TeamMain from '../../components/Team';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';

// Breadcrumbs Background Image

const Team = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='team'
                activeMenu="/team"
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Our Team 1"
                pageName="Our Team 1"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            <TeamMain/>
            <Footer />
        </React.Fragment>
    );
}

export default Team;