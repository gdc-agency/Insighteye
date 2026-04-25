
import { Link } from 'react-router-dom';

const SinglePost = ( props ) => {
    const {caseImage, bgImg, bgImg2, caseTitle, caseDesc } = props;
    return (
      <>       

<div
className="case-block-one wow fadeInUp animated"
data-wow-delay="00ms"
data-wow-duration="1500ms"
>
<div className="inner-box">
  <figure className="image-box">
    <img
        src={caseImage}
        alt={caseTitle}
    />
  </figure>
  <div className="view-btn">
    <Link
      to="/case/case-details"
      className="lightbox-image"
      data-fancybox="gallery"
    >
      <i className="icon-5" />
    </Link>
  </div>
  <div className="content-box">
    <div className="shape">
      <div
        className="shape-1"
        style={{
          backgroundImage:`url(${bgImg})`
        }}
      />
      <div
        className="shape-2"
        style={{
          backgroundImage:`url(${bgImg2})`
        }}
      />
    </div>
    <h3>
      <Link to="/case/case-details">{caseTitle ? caseTitle : 'Event Security'}</Link>
    </h3>
    <p></p>
    <p>{caseDesc ? caseDesc : 'Personal Protection'}</p>
  </div>
</div>
</div>

</>

    )
}

export default SinglePost