import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TeamMainSingle from '../../components/Team/TeamMainSingle';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';




const TeamTwo = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='team'
                activeMenu='/team-2'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Our Team 2"
                pageName="Our Team 2"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            
            <TeamMainSingle/>
            <Footer />
          
        </React.Fragment>
    );
}


export default TeamTwo;