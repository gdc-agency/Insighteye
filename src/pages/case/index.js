import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CaseMain from '../../components/Case'
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';

// Breadcrumbs Background Image

const Case = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='case'
                activeMenu="/case"
            />
             {/* breadcrumb-area-start */}
             <SiteBreadcrumb
                pageTitle="Case Study"
                pageName="Case Study"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            {/* Blog Main */}
            <CaseMain />
            {/* Blog Main End */}
            <Footer />
        </React.Fragment>
    );
}

export default Case;