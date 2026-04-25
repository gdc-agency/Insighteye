'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import bgImg1 from "../../assets/images/shape/shape-5.png";
import testimonialImage1 from '../../assets/images/resource/testimonial-1.jpg';
import testimonialImage2 from '../../assets/images/resource/testimonial-1.png';

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
            
            {/* testimonial-section*/}
            <section className="testimonial-section pt_150">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box mr_40">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">Testimonials</span>
                                </div>
                                <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                                    <SwiperSlide className="slide">
                                    <div className="testimonial-block-one">
                                        <div className="text-box pb_35 mb_35">
                                            <div className="text">“The private investigator should provide value for the client investment. They should be cost-effective and efficient.”</div>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-18"></i></li>
                                            </ul>
                                        </div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src={testimonialImage2} alt="" /></figure>
                                            <h3>Ronald Richards</h3>
                                            <span className="designation">Service taker</span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide">
                                    <div className="testimonial-block-one">
                                        <div className="text-box pb_35 mb_35">
                                            <div className="text">“The private investigator should provide value for the client investment. They should be cost-effective and efficient.”</div>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-18"></i></li>
                                            </ul>
                                        </div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src={testimonialImage2} alt="" /></figure>
                                            <h3>Ronald Richards</h3>
                                            <span className="designation">Service taker</span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide">
                                    <div className="testimonial-block-one">
                                        <div className="text-box pb_35 mb_35">
                                            <div className="text">“The private investigator should provide value for the client investment. They should be cost-effective and efficient.”</div>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-19"></i></li>
                                                <li><i className="icon-18"></i></li>
                                            </ul>
                                        </div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src={testimonialImage2} alt="" /></figure>
                                            <h3>Ronald Richards</h3>
                                            <span className="designation">Service taker</span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box pr_50 pb_50 ml_40">
                                <div className="image-shape rotate-me" style={{
                            backgroundImage:`url(${bgImg1})`
                        }}></div>
                                <figure className="image"><img src={testimonialImage1} alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*testimonial-section end */}
        </>
    )
}
