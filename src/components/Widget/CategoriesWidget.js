import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesWidget = () => {
    return (
        <div className="sidebar-widget category-widget">
              <div className="widget-title">
                <h3>Categories</h3>
              </div>
              <div className="widget-content">
                <ul className="category-list clearfix">
                  <li>
                    <Link to="#">City News</Link>
                  </li>
                  <li>
                    <Link to="#">Government</Link>
                  </li>
                  <li>
                    <Link to="#">Development</Link>
                  </li>
                  <li>
                    <Link to="#">Tourism</Link>
                  </li>
                  <li>
                    <Link to="#">Culture</Link>
                  </li>
                  <li>
                    <Link to="#">Community</Link>
                  </li>
                </ul>
              </div>
            </div>
    )
}

export default CategoriesWidget;