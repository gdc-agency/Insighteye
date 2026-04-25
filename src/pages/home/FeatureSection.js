import React from 'react';

const Feature = (props) => {
    return (
        <>
        {/* feature-section */}
        <section className="feature-section">
            <div className="auto-container">
            <div className="inner-container">
                <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 feature-block">
                    <div className="feature-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                        <div className="icon gradient-color">
                            <i className="icon-9" />
                        </div>
                        </div>
                        <h3>Collect all evidence</h3>
                        <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 feature-block">
                    <div className="feature-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                        <div className="icon gradient-color">
                            <i className="icon-12" />
                        </div>
                        </div>
                        <h3>Strong investigation team</h3>
                        <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* feature-section end */}
        </>


    );
}

export default Feature;