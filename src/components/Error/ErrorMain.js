import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/icons/error-1.png'


const ErrorMain = (props) => {
    return (
        
        <>
        {/*error-section */}
        <section className="error-section centred sec-pad-3">
                <div className="auto-container">
                    <div className="content-box">
                        <figure className="image-box"><img src={errorImg} alt="" /></figure>
                        <h2>Oops! That Page Can Not <br />be Found.</h2>
                        <Link to="/" className="theme-btn btn-one">Back to Homepage</Link>
                    </div>
                </div>
            </section>
            {/*error-section end */}
        </>


    );
}

export default ErrorMain;