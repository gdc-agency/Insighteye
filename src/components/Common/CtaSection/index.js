import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = (props) => {
	const { ctaImage, ctaTitle, ctaButtonText  } = props;

	
	return (
		

		<section className="cta-section pt_90 pb_100">
			<figure className="image-layer"><img
                src={ctaImage}
                alt={ctaTitle}
            />
			</figure>
			<div className="auto-container">
				<div className="row clearfix">
					<div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
						<div className="content-box">
							<h2> {ctaTitle ? ctaTitle : 'Get Professional security service.'}</h2>
							<Link to="/contact" className="theme-btn btn-one">
								{ctaButtonText ? ctaButtonText : 'Contact With Us'}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
}

export default CtaSection;




