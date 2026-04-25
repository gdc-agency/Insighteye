import React from 'react';
import Header from '../../components/Layout/Header';
import BlogMain from '../../components/Blog'
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';

import Footer from '../../components/Layout/Footer';

// Breadcrumbs Background Image

const Blog = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='blog'
                activeMenu='/blog'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Blog Grid"
                pageName="Blog Grid"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            {/* Blog Main */}
            <BlogMain />
            {/* Blog Main End */}
            <Footer />
        </React.Fragment>
    );
}


export default Blog;

