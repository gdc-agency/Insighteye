import React from 'react';
import { Link } from 'react-router-dom';

const ArchivesWidget = () => {
    return (
      <div className="sidebar-widget archives-widget category-widget">
      <div className="widget-title">
        <h3>Archives</h3>
      </div>
      <div className="widget-content">
        <ul className="category-list clearfix">
          <li>
            <Link to="#">July 2021</Link>
          </li>
          <li>
            <Link to="#">June 2021</Link>
          </li>
          <li>
            <Link to="#">May 2021</Link>
          </li>
          <li>
            <Link to="#">March 2021</Link>
          </li>
          <li>
            <Link to="#">February 2021</Link>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default ArchivesWidget;