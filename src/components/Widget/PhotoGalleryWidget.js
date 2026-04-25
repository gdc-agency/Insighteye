import React from 'react';
import { Link } from 'react-router-dom';

// Recent Post Thumb Images
import gallery1 from '../../assets/images/news/gallery-1.jpg'
import gallery2 from '../../assets/images/news/gallery-2.jpg'
import gallery3 from '../../assets/images/news/gallery-3.jpg'
import gallery4 from '../../assets/images/news/gallery-4.jpg'
import gallery5 from '../../assets/images/news/gallery-5.jpg'
import gallery6 from '../../assets/images/news/gallery-6.jpg'



const PhotoGalleryWidget = () => {
    return (
        <>
            <div className="sidebar-widget gallery-widget">
              <div className="widget-title">
                <h3>Photo Gallery</h3>
              </div>
              <div className="widget-content">
                <ul className="image-list clearfix">
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery1}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery2}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery3}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery4}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery5}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                    <Link to="/blog/blog-details">
                    <img
                        src={gallery6}
                        alt=""
                    />
                    </Link>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
        </>
        

    )
}

export default PhotoGalleryWidget;