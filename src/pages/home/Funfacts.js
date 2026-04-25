import React from 'react';
import CounterUp from "../../components/elements/CounterUp"


const Funfacts = (props) => {
    return (
        
        <>
        {/*funfact-section */}
        <section className="funfact-section">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-12"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={40} /><span>+</span>
                            </div>
                            <h3>Team members</h3>
                        </div>
                    </div>
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-7"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={98} /><span>%</span>
                            </div>
                            <h3>Project Success</h3>
                        </div>
                    </div>
                    <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><div className="icon gradient-color"><i className="icon-8"></i></div></div>
                            <div className="count-outer count-box">
                                <CounterUp end={40} /><span>k+</span>
                            </div>
                            <h3>Happy Clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*funfact-section end */}
        </>


    );
}

export default Funfacts;