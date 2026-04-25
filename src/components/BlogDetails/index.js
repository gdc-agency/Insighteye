import PostContent from './PostContent';
import BlockQuote from './BlockQuote';
import ContentTwo from './ContentTwo';
import CtaSection from '../Common/CtaSection';
import ctaImage from "../../assets/images/resource/men-1.png";
import Tags from './Tags';
import AuthorBox from './AuthorBox';
import CommentForm from './CommentForm';
import SearchWidget from '../Widget/SearchWidget';
import CategoriesWidget from '../Widget/CategoriesWidget';
import LatestNewsWidget from '../Widget/LatestNewsWidget';
import PhotoGalleryWidget from '../Widget/PhotoGalleryWidget';
import ArchivesWidget from '../Widget/ArchivesWidget';
import PopularTagsWidget from '../Widget/PopularTagsWidget';


const BlogDetailsMain = () => {

    return (
        <>
        {/* sidebar-page-container */}
        <section className="sidebar-page-container sec-pad-3">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <div className="content-one mb_35">
                    <PostContent />
                    <BlockQuote />
                    <div className="text-box">
                      <h3>How to know your credit score</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus ornare non non massa elit rutrum. Erosie proin nibh
                        neque interdum accumsan, neque vitae. Tortor etiam sed
                        suspendisse faucibus ac volutpati mattis tortor nec. Orc velit
                        a, posuere turpis amet. Lectus lacus lectus habitasse amet
                        quam libero, and lorem. Volutpat odio maecenas viverra
                        consequat condimentum diam donec aliquet. Natoque quam id
                        vitae leo risus. Eget neque proin in dolor cursus bibendum
                        urna dictum. Aliquam gravida et proin donen maecenas quis
                        faucibus varius tristique.
                      </p>
                      <p>
                        Pulvinar dolor aliquet netus ultrices neque, mi non accumsan
                        ullamcorper. Et nunc scelerisque turpis on facilisis pretium
                        ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu
                        quis. Nunc euismod odio and cursus in diam eget tincidunt
                        mauris.
                      </p>
                    </div>
                  </div>
                  <ContentTwo/>
                  <Tags/>
                  <AuthorBox/>
                  <CommentForm/>
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

export default BlogDetailsMain;