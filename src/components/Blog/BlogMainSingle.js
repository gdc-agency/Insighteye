import { Link } from 'react-router-dom';
import SearchWidget from '../Widget/SearchWidget';
import CategoriesWidget from '../Widget/CategoriesWidget';
import LatestNewsWidget from '../Widget/LatestNewsWidget';
import PhotoGalleryWidget from '../Widget/PhotoGalleryWidget';
import ArchivesWidget from '../Widget/ArchivesWidget';
import PopularTagsWidget from '../Widget/PopularTagsWidget';


import SinglePost from './SinglePost';

import blogImg13 from '../../assets/images/news/news-13.jpg'
import blogImg14 from '../../assets/images/news/news-14.jpg'
import blogImg15 from '../../assets/images/news/news-15.jpg'
import blogImg16 from '../../assets/images/news/news-16.jpg'
import blogImg17 from '../../assets/images/news/news-17.jpg'

import CtaSection from '../Common/CtaSection'
import ctaImage from '../../assets/images/resource/men-1.png'

import blogIcon1 from '../../assets/images/icons/icon-4.svg'
import blogIcon2 from '../../assets/images/icons/icon-5.svg'


const BlogMainSingle = () => {

    return (
  <>
  {/* sidebar-page-container */}
  <section className="sidebar-page-container sec-pad-3">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
          <div className="blog-standard-content">
          <SinglePost 
            blogImage={blogImg13}
            blogIconOne={blogIcon1}
            blogIconTwo={blogIcon2}
            blogAuthor='Admin'
            blogPublishedDate='0 Cmnts'
            blogTitle='How to Manage Risk Monitoring Security'
            blogDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel non ultricies vulputate quis. Fames amet urna molestie amet suspendisse.'
            blogButtonClass='link'
          />
          <SinglePost 
            blogImage={blogImg14}
            blogIconOne={blogIcon1}
            blogIconTwo={blogIcon2}
            blogAuthor='Admin'
            blogPublishedDate='0 Cmnts'
            blogTitle='Investing Security Services is Crucial for You'
            blogDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel non ultricies vulputate quis. Fames amet urna molestie amet suspendisse.'
            blogButtonClass='link'
          />
          <SinglePost 
            blogImage={blogImg15}
            blogIconOne={blogIcon1}
            blogIconTwo={blogIcon2}
            blogAuthor='Admin'
            blogPublishedDate='0 Cmnts'
            blogTitle='How Professional Service Can Mitigate Risks'
            blogDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel non ultricies vulputate quis. Fames amet urna molestie amet suspendisse.'
            blogButtonClass='link'
          />
          <SinglePost 
            blogImage={blogImg16}
            blogIconOne={blogIcon1}
            blogIconTwo={blogIcon2}
            blogAuthor='Admin'
            blogPublishedDate='0 Cmnts'
            blogTitle='How Private Investigators Conduct Surveillance'
            blogDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel non ultricies vulputate quis. Fames amet urna molestie amet suspendisse.'
            blogButtonClass='link'
          />
          <SinglePost 
            blogImage={blogImg17}
            blogIconOne={blogIcon1}
            blogIconTwo={blogIcon2}
            blogAuthor='Admin'
            blogPublishedDate='0 Cmnts'
            blogTitle='How Private Investigators Conduct Surveillance'
            blogDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel non ultricies vulputate quis. Fames amet urna molestie amet suspendisse.'
            blogButtonClass='link'
          />
            <div className="pagination-wrapper">
              <ul className="pagination clearfix">
                <li>
                  <Link to="/blog/blog-standard">
                    <i className="fal fa-angle-left" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog/blog-standard" className="current">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="/blog/blog-standard">2</Link>
                </li>
                <li>
                  <Link to="/blog/blog-standard">3</Link>
                </li>
                <li>
                  <Link to="/blog/blog-standard">
                    <i className="fal fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
          <div className="blog-sidebar ml_20">
            <SearchWidget />
            <CategoriesWidget />
            <LatestNewsWidget />
            <PhotoGalleryWidget />
            <ArchivesWidget />
            <PopularTagsWidget />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* sidebar-page-container end */}

  {/*cta-section */}
  <CtaSection
      ctaImage={ctaImage}
      ctaTitle='Get Professional security service.'
      ctaButtonText='Contact With Us'
      />
  {/*cta-section end */}
</>


    );
}

export default BlogMainSingle;