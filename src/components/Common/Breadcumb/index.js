import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
	const { pageTitle, titleClass, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

	const breadcrumbsImgStyle = {
		backgroundImage: `url(${breadcrumbsImg})`
	}

	return (
		
		<section className="page-title p_relative centred">
		  <div className="bg-layer" style={breadcrumbsImgStyle}></div>
		  <div className="auto-container">
			<div className="content-box">
			  <h1 className={titleClass ? titleClass : ''}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
			  <ul className="bread-crumb clearfix">
			  	<li>
					<Link to="/" className="active">{parentCategory ? parentCategory : 'Home'}</Link>
				</li>
				{pageCategory ? 
					<>
						<li>
							<Link to="/" className="active">{pageCategory ? pageCategory : 'Category'}</Link>
						</li> 
						<li>{pageName ? pageName : 'Page Name'}</li>
					</> : <li>{pageName ? pageName : 'Page Name'}</li>							
				}
			  </ul>
			</div>
		  </div>
		</section>
	  
	);
}

export default SiteBreadcrumb;




