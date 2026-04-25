import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import BlogMainSingle from '../../components/Blog/BlogMainSingle';


const BlogStandard = () => {
    return (
        <React.Fragment>

            <Header
                parentMenu='blog'
                activeMenu='/blog-standard'
            />
            <SiteBreadcrumb
                pageTitle="Blog Standard"
                pageName="Blog Standard"
                breadcrumbsImg={bannerbg}
            />
            {/* Blog Main */}
            <BlogMainSingle />
            {/* Blog Main End */}

            <Footer />

        </React.Fragment>
    );
}


export default BlogStandard;

