import React from 'react';
import VideoPopup from '../../components/elements/VideoPopup';
import videoImg from "../../assets/images/background/video-bg-2.jpg";


const Video = (props) => {
    return (
        
        <>
        {/*video-section */}
        <section className="video-section p_relative centred">
            <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage: `url(${videoImg})`}}></div>
            <div className="auto-container">
                <div className="inner-box">
                    <div className="video-btn">
                        <VideoPopup />
                    </div>
                    <h2>Watch Our Private <br />Investigation</h2>
                </div>
            </div>
        </section>
        {/*video-section end */}
        </>


    );
}

export default Video;