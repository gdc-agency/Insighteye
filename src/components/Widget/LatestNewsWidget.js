import React from 'react';
import { Link } from 'react-router-dom';

// Recent Post Thumb Images
import thumb1 from '../../assets/images/news/post-1.jpg'
import thumb2 from '../../assets/images/news/post-2.jpg'
import thumb3 from '../../assets/images/news/post-3.jpg'
import icon13 from '../../assets/images/icons/icon-13.svg'


const LatestNewsWidget = () => {
    return (
        <>
        <div className="sidebar-widget post-widget">
              <div className="widget-title">
                <h3>Latest News</h3>
              </div>
              <div className="post-inner">
                <div className="post">
                  <figure className="post-thumb">
                    <Link to="/blog/blog-details">
                    <img
                        src={thumb1}
                        alt=""
                    />
                    </Link>
                  </figure>
                  <h6>
                    <Link to="/blog/blog-details">
                      Self-Guided Driving &amp; Tours Walk
                    </Link>
                  </h6>
                  <span className="post-date">
                  <img
                        src={icon13}
                        alt=""
                    /> Apr 17,
                    2022
                  </span>
                </div>
                <div className="post">
                  <figure className="post-thumb">
                    <Link to="/blog/blog-details">
                      <img
                        src={thumb2}
                        alt=""
                    />
                    </Link>
                  </figure>
                  <h6>
                    <Link to="/blog/blog-details">
                      How to Manage Risk Monitoring Security
                    </Link>
                  </h6>
                  <span className="post-date">
                    <img
                        src={icon13}
                        alt=""
                    /> Apr 17,
                    2022
                  </span>
                </div>
                <div className="post">
                  <figure className="post-thumb">
                    <Link to="/blog/blog-details">
                    <img
                        src={thumb3}
                        alt=""
                    />
                    </Link>
                  </figure>
                  <h6>
                    <Link to="/blog/blog-details">
                      Investing Security Services is Crucial
                    </Link>
                  </h6>
                  <span className="post-date">
                  <img
                    src={icon13}
                    alt=""
                /> Apr 17,
                    2022
                  </span>
                </div>
              </div>
            </div>
        </>
        

    )
}

export default LatestNewsWidget;