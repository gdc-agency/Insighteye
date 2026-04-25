import React from 'react';

const SearchWidget = () => {
    return (
        <div className="sidebar-widget search-widget">
            <div className="widget-title">
            <h3>Search</h3>
            </div>
            <div className="search-form">
            <form method="post" action="blog-2.html">
                <div className="form-group">
                <input
                    type="search"
                    name="search-field"
                    placeholder="Search..."
                    required=""
                />
                <button type="submit">
                    <i className="icon-22" />
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SearchWidget;