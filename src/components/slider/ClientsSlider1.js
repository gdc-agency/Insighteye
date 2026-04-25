'use client'
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import clientsImg6 from "../../assets/images/clients/clients-6.png";
import clientsImg7 from "../../assets/images/clients/clients-7.png";
import clientsImg8 from "../../assets/images/clients/clients-8.png";
import clientsImg9 from "../../assets/images/clients/clients-9.png";
import clientsImg10 from "../../assets/images/clients/clients-10.png";

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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}
export default function ClientsSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg6} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg7} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg8} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg9} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg10} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg6} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg7} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg8} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg9} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg10} alt="" /></Link></div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
