import React from 'react';
import { Link } from 'react-router-dom';

const PopularTagsWidget = () => {
    return (
      <div className="sidebar-widget tags-widget">
              <div className="widget-title">
                <h3>Popular Tags</h3>
              </div>
              <div className="widget-content">
                <ul className="tags-list clearfix">
                  <li>
                    <Link to="#">Activities</Link>
                  </li>
                  <li>
                    <Link to="#">Depertment</Link>
                  </li>
                  <li>
                    <Link to="#">City</Link>
                  </li>
                  <li>
                    <Link to="#">Certificate</Link>
                  </li>
                  <li>
                    <Link to="#">Transport</Link>
                  </li>
                  <li>
                    <Link to="#">Mayor</Link>
                  </li>
                  <li>
                    <Link to="#">Taxes &amp; Bills</Link>
                  </li>
                  <li>
                    <Link to="#">Food</Link>
                  </li>
                </ul>
              </div>
            </div>
    )
}

export default PopularTagsWidget;