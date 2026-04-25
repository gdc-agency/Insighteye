'use client'
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
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                            <h5>Alex Williamson</h5>
                            <span className="designation">Surgery Patient</span>
                            <ul className="rating">
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                            </ul>
                            <p>Enim amet id maecenas congue sedis sedet tincidunt sit donec. Ac cum atde  elit purus varius isti facilia.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                            <h5>Sandy Thosmson</h5>
                            <span className="designation">Eye Pain Patient</span>
                            <ul className="rating">
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                            </ul>
                            <p>Enim amet id maecenas congue sedis sedet tincidunt sit donec. Ac cum atde  elit purus varius isti facilia.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt="" /></figure>
                            <h5>Sandy Thosmson</h5>
                            <span className="designation">Eye Pain Patient</span>
                            <ul className="rating">
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                            </ul>
                            <p>Enim amet id maecenas congue sedis sedet tincidunt sit donec. Ac cum atde  elit purus varius isti facilia.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt="" /></figure>
                            <h5>John Brokelyn</h5>
                            <span className="designation">Transplant Patient</span>
                            <ul className="rating">
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                            </ul>
                            <p>Enim amet id maecenas congue sedis sedet tincidunt sit donec. Ac cum atde  elit purus varius isti facilia.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                            <h5>Alex Williamson</h5>
                            <span className="designation">Surgery Patient</span>
                            <ul className="rating">
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                                <li><i className="icon-18"></i></li>
                            </ul>
                            <p>Enim amet id maecenas congue sedis sedet tincidunt sit donec. Ac cum atde  elit purus varius isti facilia.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
