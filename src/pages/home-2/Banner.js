
// import Swiper core and required modules
import { Link } from 'react-router-dom';
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import bgImg1 from "../../assets/images/banner/banner-4.jpg";
import bgImg2 from "../../assets/images/banner/banner-5.jpg";


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
function Banner() {
  return (
    <>
    <section className="banner-style-two p_relative centred">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{backgroundImage:`url(${bgImg1})`}}></div>
                        <div className="auto-container">
                            <div className="content-box p_relative d_block z_5">
                                <h3>Discover The Truth</h3>
                                <h2>Private Investigation Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ridiculus <br />tellus elit turpis.</p>
                                <div className="btn-box">
                                    <Link to="/about" className="theme-btn btn-two"><span>Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage:`url(${bgImg2})`}}></div>
                        <div className="auto-container">
                            <div className="content-box p_relative d_block z_5">
                                <h3>Discover The Truth</h3>
                                <h2>Private Investigation Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ridiculus <br />tellus elit turpis.</p>
                                <div className="btn-box">
                                    <Link to="/about" className="theme-btn btn-two"><span>Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
    </>
  );
}

export default Banner;
