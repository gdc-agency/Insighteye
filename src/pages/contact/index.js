import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ContactMain from './ContactMain';




// Breadcrumbs Background Image

const Contact = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='contact'
                activeMenu="/contact"
            />

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}
           
            
            <Footer />
        </React.Fragment>
    );
}

export default Contact;