import React from 'react';
import author1 from '../../assets/images/news/author-1.jpg';

const BlockQuote = ({ }) => {
    return (
        <blockquote>
            <div className="icon-box gradient-color">
            <i className="icon-21" />
            </div>
            <h5>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit amet
            purus tempor dui pharet consequat nibh elit urna interdum
            viera quam and arcu duis quis lectus donec nulla aliquam
            </h5>
            <div className="author-inner">
            <figure className="thumb-box">
                <img
                    src={author1}
                    alt="Post Image"
                />
            </figure>
            <h3>Ronald Richards</h3>
            <span className="designation">Service taker</span>
            </div>
        </blockquote>
    )
}

export default BlockQuote;