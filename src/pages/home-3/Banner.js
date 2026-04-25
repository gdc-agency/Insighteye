
// import Swiper core and required modules
import { Link } from 'react-router-dom';
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import bgImg1 from "../../assets/images/banner/banner-6.jpg";
import bgImg2 from "../../assets/images/banner/banner-7.jpg";
import bgImg3 from "../../assets/images/banner/banner-8.jpg";
import bgShape2 from "../../assets/images/shape/shape-3.png";
import bgShape3 from "../../assets/images/shape/shape-2.png";



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
    <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: `url(${bgShape3})` }}></div>
                                <div className="pattern-2" style={{ backgroundImage: `url(${bgShape2})` }}></div>
                            </div>
                            <div className="bg-layer" style={{ backgroundImage: `url(${bgImg1})` }}></div>
                            <div className="auto-container">
                                <div className="content-box p_relative d_block z_5">
                                <h3>Discover The Truth</h3>
                                <h2>Private Investigation Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ridiculus tellus elit turpis.</p>
                                <div className="btn-box">
                                    <Link to="/" className="theme-btn btn-one"><span>Discover More</span></Link>
                                </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">

                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: `url(${bgShape3})` }}></div>
                                <div className="pattern-2" style={{ backgroundImage: `url(${bgShape2})` }}></div>
                            </div>
                            <div className="bg-layer" style={{ backgroundImage: `url(${bgImg2})` }}></div>
                            <div className="auto-container">
                                <div className="content-box p_relative d_block z_5">
                                <h3>Discover The Truth</h3>
                                <h2>Private Investigation Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ridiculus tellus elit turpis.</p>
                                <div className="btn-box">
                                    <Link to="/" className="theme-btn btn-one"><span>Discover More</span></Link>
                                </div>
                                </div>
                            </div>

                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">

                        <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: `url(${bgShape3})` }}></div>
                                <div className="pattern-2" style={{ backgroundImage: `url(${bgShape2})` }}></div>
                        </div>
                        <div className="bg-layer" style={{ backgroundImage: `url(${bgImg3})` }}></div>
                        <div className="auto-container">
                            <div className="content-box p_relative d_block z_5">
                            <h3>Discover The Truth</h3>
                            <h2>Private Investigation Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ridiculus tellus elit turpis.</p>
                            <div className="btn-box">
                                <Link to="/" className="theme-btn btn-one"><span>Discover More</span></Link>
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
