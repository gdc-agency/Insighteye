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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="content-box" style={{ backgroundImage: "url(assets/images/resource/surgeries-1.jpg)" }}>
                        <div className="inner-box">
                            <h4>Prevent Damage to Optic Nerve</h4>
                            <p>Nisl fringilla lorem augue euismod vitaeios est sollicitudin aliquam sapien. Ac a leo ist aliquam nec integer condimen.</p>
                            <Link to="/service/service-details"><i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="content-box" style={{ backgroundImage: "url(assets/images/resource/surgeries-2.jpg)" }}>
                        <div className="inner-box">
                            <h4>Prevent Damage to Optic Nerve</h4>
                            <p>Nisl fringilla lorem augue euismod vitaeios est sollicitudin aliquam sapien. Ac a leo ist aliquam nec integer condimen.</p>
                            <Link to="/service/service-details"><i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="content-box" style={{ backgroundImage: "url(assets/images/resource/surgeries-1.jpg)" }}>
                        <div className="inner-box">
                            <h4>Prevent Damage to Optic Nerve</h4>
                            <p>Nisl fringilla lorem augue euismod vitaeios est sollicitudin aliquam sapien. Ac a leo ist aliquam nec integer condimen.</p>
                            <Link to="/service/service-details"><i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="content-box" style={{ backgroundImage: "url(assets/images/resource/surgeries-2.jpg)" }}>
                        <div className="inner-box">
                            <h4>Prevent Damage to Optic Nerve</h4>
                            <p>Nisl fringilla lorem augue euismod vitaeios est sollicitudin aliquam sapien. Ac a leo ist aliquam nec integer condimen.</p>
                            <Link to="/service/service-details"><i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
