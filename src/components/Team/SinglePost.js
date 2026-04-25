
import { Link } from 'react-router-dom';

const SinglePost = ( props ) => {
    const {teamImage, teamTitle, teamDesc, } = props;
    return (
        <>
        <div
            className="team-block-one wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <img
                    src={teamImage}
                    alt={teamTitle}
                />
              </figure>
              <div className="lower-content">
                <div className="share-box">
                  <div className="share-icon">
                    <i className="fas fa-share-alt" />
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-skype" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <h3>
                    <Link to="/team/team-details">
                      {teamTitle ? teamTitle : 'Marvin McKiney'}
                    </Link>
                </h3>
                <span className="designation">{teamDesc ? teamDesc : 'Founder'}</span>
              </div>
            </div>
          </div>
        </>
        

    )
}

export default SinglePost