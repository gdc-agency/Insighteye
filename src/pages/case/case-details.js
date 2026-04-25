import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CaseDetailsMain from './CaseDetailsMain';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';

// Breadcrumbs Background Image

const CaseDetails = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='case'
                activeMenu="/case-details"
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Case Details"
                pageName="Case Details"
                breadcrumbsImg={bannerbg}
            />
            <CaseDetailsMain/>
            <Footer />
        </React.Fragment>
    );
}

export default CaseDetails;