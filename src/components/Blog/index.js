import SinglePost from './SinglePost';
import CtaSection from '../Common/CtaSection';
import ctaImage from "../../assets/images/resource/men-1.png";



import blogImg1 from '../../assets/images/news/news-1.jpg'
import blogImg2 from '../../assets/images/news/news-2.jpg'
import blogImg3 from '../../assets/images/news/news-3.jpg'
import blogImg4 from '../../assets/images/news/news-4.jpg'
import blogImg5 from '../../assets/images/news/news-5.jpg'
import blogImg6 from '../../assets/images/news/news-6.jpg'
import blogImg7 from '../../assets/images/news/news-7.jpg'
import blogImg8 from '../../assets/images/news/news-8.jpg'
import blogImg9 from '../../assets/images/news/news-9.jpg'
import blogImg10 from '../../assets/images/news/news-10.jpg'
import blogImg11 from '../../assets/images/news/news-11.jpg'
import blogImg12 from '../../assets/images/news/news-12.jpg'
import blogIcon1 from '../../assets/images/icons/icon-4.svg'
import blogIcon2 from '../../assets/images/icons/icon-5.svg'
import { Link } from 'react-router-dom';


const BlogMain = () => {

    return (
        <>
          {/* news-section */}
          <section className="news-section blog-grid sec-pad-3">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg1}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='How to Manage Risk Monitoring Security'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg2}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Famous Cases Solved by Private Investigators'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg3}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='How Private Investigators Conduct Surveillance'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg4}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='How Professional Service Can Mitigate Risks'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg5}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Investing Security Services is Crucial for You'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg6}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Exploring Modern Security Service Solutions'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg7}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Role of Security Services in Safeguarding'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg8}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='The Top Security Services You Should Consider'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg9}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='How Security Services Can Help you'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg10}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='The Benefits of Security Services'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg11}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Choosing Right Security Service'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <SinglePost 
                    blogImage={blogImg12}
                    blogIconOne={blogIcon1}
                    blogIconTwo={blogIcon2}
                    blogAuthor='Admin'
                    blogPublishedDate='0 Cmnts'
                    blogTitle='Essential Security Services Every Business'
                    blogDesc='Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.'
                    blogButtonClass='link'
                />
                </div>
              </div>
              <div className="pagination-wrapper centred pt_50">
                <ul className="pagination clearfix">
                  <li>
                    <Link to="/blog">
                      <i className="fal fa-angle-left" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="current">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">2</Link>
                  </li>
                  <li>
                    <Link to="/blog">3</Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fal fa-angle-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* news-section end */}

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

export default BlogMain;