'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import clientsImg1 from "../../assets/images/clients/clients-1.png";
import clientsImg2 from "../../assets/images/clients/clients-2.png";
import clientsImg3 from "../../assets/images/clients/clients-3.png";
import clientsImg4 from "../../assets/images/clients/clients-4.png";
import clientsImg5 from "../../assets/images/clients/clients-5.png";
import { Link } from "react-router-dom";

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
export default function ClientsSlider() {
    return (
        <>
            
            {/* clients-section*/}
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg1} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg2} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg3} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg4} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg5} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg1} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg2} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg3} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg4} alt="" /></Link></div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="clients-logo"><Link to="/"><img src={clientsImg5} alt="" /></Link></div>
                </SwiperSlide>
            </Swiper>
        {/*clients-section end */}
        </>
    )
}
