import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TeamDetailsMain from './TeamDetailsMain';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';




const TeamDetails = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='team'
                activeMenu='/team-details'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Team Details"
                pageName="Team Details"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            
            <TeamDetailsMain/>
            <Footer />
          
        </React.Fragment>
    );
}


export default TeamDetails;