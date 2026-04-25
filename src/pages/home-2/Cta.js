import React from 'react';
import ctaImage from "../../assets/images/resource/men-1.png";
import CtaSection from '../../components/Common/CtaSection';


const Cta = (props) => {
    return (
        
        <>
        {/*cta-section */}
            <CtaSection
            ctaImage={ctaImage}
            ctaTitle='Get Professional security service.'
            ctaButtonText='Contact With Us'
            />
        {/*cta-section end */}
        </>


    );
}

export default Cta;