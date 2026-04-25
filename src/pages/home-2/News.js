import React from 'react';
import { Link } from 'react-router-dom';
import newsImge1 from "../../assets/images/news/news-1.jpg";
import newsImge2 from "../../assets/images/news/news-2.jpg";
import newsImge3 from "../../assets/images/news/news-3.jpg";
import newsIcon1 from "../../assets/images/icons/icon-4.svg";
import newsIcon2 from "../../assets/images/icons/icon-4.svg";


const News = (props) => {
    return (
        
        <>
        {/*news-section */}
        <section className="news-section sec-pad">
            <div className="auto-container">
                <div className="sec-title mb_50 centred">
                    <span className="sub-title">Our Article</span>
                    <h2>Get More Update From <br />Our Article</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog/blog-details"><img src={newsImge1} alt="" /></Link></figure>
                                    <div className="date">16 <span>APR</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info mb_13 clearfix">
                                        <li><img src={newsIcon1} alt="" /><Link to="/blog/blog-details">Admin</Link></li>
                                        <li><img src={newsIcon2} alt="" />0 Cmnts</li>
                                    </ul>
                                    <h3><Link to="/blog/blog-details">How to Manage Risk Monitoring Security</Link></h3>
                                    <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                    <div className="link">
                                        <Link to="/blog/blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog/blog-details"><img src={newsImge2} alt="" /></Link></figure>
                                    <div className="date">14 <span>APR</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info mb_13 clearfix">
                                        <li><img src={newsIcon1} alt="" /><Link to="/blog/blog-details">Admin</Link></li>
                                        <li><img src={newsIcon2} alt="" />0 Cmnts</li>
                                    </ul>
                                    <h3><Link to="/blog/blog-details">Famous Cases Solved by Private Investigators</Link></h3>
                                    <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                    <div className="link">
                                        <Link to="/blog/blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog/blog-details"><img src={newsImge3} alt="" /></Link></figure>
                                    <div className="date">13 <span>APR</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info mb_13 clearfix">
                                        <li><img src={newsIcon1} alt="" /><Link to="/blog/blog-details">Admin</Link></li>
                                        <li><img src={newsIcon2} alt="" />0 Cmnts</li>
                                    </ul>
                                    <h3><Link to="/blog/blog-details">How Private Investigators Conduct Surveillance</Link></h3>
                                    <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                    <div className="link">
                                        <Link to="/blog/blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*news-section end */}
        </>


    );
}

export default News;