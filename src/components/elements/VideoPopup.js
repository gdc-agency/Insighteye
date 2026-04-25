'use client'
import { useState } from 'react';
import ModalVideo from 'react-modal-video'



export default function VideoPopup({ style, text }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* <a onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></a> */}
            {/* <span className="icon-17" onClick={() => setOpen(true)} /> */}
            

            {!style &&
                <div className="video-btn">
                    <button type="button" onClick={() => setOpen(true)} className="lightbox-image">
                        <i className="icon-17"></i>
                    </button>
                </div>
            }
                    
            



            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}