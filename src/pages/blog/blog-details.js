import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/background/page-title.jpg';
import BlogDetailsMain from '../../components/BlogDetails';


const BlogDetails = () => {
    return (
        <React.Fragment>

            <Header
                parentMenu='blog'
                activeMenu='/blog-details'
            />
            <SiteBreadcrumb
                pageTitle="Blog Details"
                pageName="Blog Details"
                breadcrumbsImg={bannerbg}
            />
            {/* Blog Main */}
            <BlogDetailsMain />
            {/* Blog Main End */}
            
            <Footer />

        </React.Fragment>
    );
}


export default BlogDetails;

