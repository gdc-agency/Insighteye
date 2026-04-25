import React from 'react';
import { Link } from 'react-router-dom';


const TopHeader = () => {

    return (
        <>
        {/* header-top */}
        <div className="header-top">
          <div className="outer-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="icon-1 gradient-color" />
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
                <li>
                  <i className="icon-3 gradient-color" />
                  Open Hours: Mon - Fri 8.00 am - 6.00 pm
                </li>
              </ul>
              <div className="top-right">
                <div className="login-box">
                  <Link to="/">
                    <i className="icon-4 gradient-color" /> Login
                  </Link>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header-lower */}
      </>
      
    );
}

export default TopHeader;