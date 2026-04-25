
import { Link } from 'react-router-dom';

const SingleBlog = ( props ) => {
    const {blogClass, blogImage, blogIconOne, blogIconTwo, blogTitle, blogDesc, blogCategory, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText } = props;
    return (
        <>
      <div className={blogClass ? blogClass : 'news-block-one'}>
      <div className="inner-box">
        <figure className="image-box">
          <Link to="/blog/blog-details">
            <img
                    src={blogImage}
                    alt={blogTitle}
                />
          </Link>
        </figure>
        <div className="lower-content">
          <div className="date">
            16 <span>APR</span>
          </div>
          <ul className="post-info mb_13 clearfix">
            <li>
            <img
                src={blogIconOne}
                alt={blogTitle}
            />
              <Link to="/blog/blog-details">{blogAuthor ? blogAuthor : 'admin'}</Link>
            </li>
            <li>
              <img
                src={blogIconTwo}
                alt={blogTitle}
            />
            {blogPublishedDate ? blogPublishedDate : ' 0 Cmnts'}
              </li>
          </ul>
          <h3>
              <Link to="/blog/blog-details">
                {blogTitle ? blogTitle : 'How to Manage Risk Monitoring Security'}
              </Link>
            </h3>
            <p>{blogDesc ? blogDesc : 'Amet minim mollit no duis sit enim aliqua dolor do amet officia.'}</p>
            <div className={blogButtonClass ? blogButtonClass : 'link'}>
              <Link to="/blog/blog-details">
                <span>{blogButtonText ? blogButtonText : 'Read More'}</span>
              </Link>
            </div>
        </div>
      </div>
    </div>
    </>

    )
}

export default SingleBlog