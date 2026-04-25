import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
	return(
        <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img 
                        src={props.serviceImage} 
                        alt={props.Title}
                    />
                    </figure>
                    <div className="category">
                      <span className="gradient-color">Domestic</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to='/service/service-details'>
                            {props.Title}
                        </Link>
                    </h3>
                    <p>
                      {props.Text}
                    </p>
                    <div className="btn-box">
                      <Link to="/service/service-details" className="theme-btn btn-two">
                        Read&nbsp;More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
	)
}

export default SingleService