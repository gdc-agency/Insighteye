
import { Link } from 'react-router-dom';

const SinglePostTwo = ( props ) => {
    const {teamImage, teamTitle, teamDesc, } = props;
    return (
        <>
          <div
            className="team-block-three wow fadeInUp animated"
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
              <div className="content-box">
                <h3>
                <Link to="/team/team-details">
                    {teamTitle ? teamTitle : 'Marvin McKiney'}
                  </Link>
                </h3>
                <span className="designation">{teamDesc ? teamDesc : 'Founder'}</span>
                <ul className="social-links clearfix">
                  <li>
                    <Link to="/home-3">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-3">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-3">
                      <i className="fab fa-skype" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-3">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
        

    )
}

export default SinglePostTwo