'use client'
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

     navigation: {   // Navigation

        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/project/project-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="inner">
                                    <span>Eye Care</span>
                                    <h3><Link to="/">Retinal Surgery</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/project/project-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="inner">
                                    <span>Eye Care</span>
                                    <h3><Link to="/">Refractive Nature</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/project/project-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="inner">
                                    <span>Eye Care</span>
                                    <h3><Link to="/">Cornea Transplant</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/project/project-4.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="inner">
                                    <span>Eye Care</span>
                                    <h3><Link to="/">Contract Surgery</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/project/project-5.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="inner">
                                    <span>Eye Care</span>
                                    <h3><Link to="/">Ptosis Repair</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
