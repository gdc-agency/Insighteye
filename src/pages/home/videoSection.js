import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import videobgImg from '../../assets/images/background/video-bg.jpg';

const Video = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <>
        {/* video-section */}
        <section className="video-section p_relative centred">
        <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
          <div
            className="bg-layer parallax-bg"
            data-parallax='{"y": 100}'
            style={{ backgroundImage:`url(${videobgImg})`
                 }}
          />
          <div className="auto-container">
            <div className="inner-box">
              <div className="video-btn">
                <a className="popup-video" onClick={() => { openModal(); }}><i className="icon-17" /></a>
              </div>
              <h2>
                Watch Our Private <br />
                Investigation
              </h2>
            </div>
          </div>
        </section>
        {/* video-section end */}
      </>
      
    );

}

export default Video;