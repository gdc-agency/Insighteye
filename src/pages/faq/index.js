import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import FaqMain from '../../components/Faq';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';


const Faq = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='pages'
                activeMenu='/faq'
            />
            <SiteBreadcrumb
                pageTitle="FAQs"
                pageName="FAQs"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
          
          
          {/* Faq */}
          <FaqMain />
        {/* Faq */}
            <Footer />
        </React.Fragment>

    );
}


export default Faq;