import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import TopHeader from './TopBar';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import navShape from "../../../assets/images/shape/shape-1.png";
import navImg from "../../../assets/images/logo.png";
import stickyImg from "../../../assets/images/logo.png";


// import whiteLogo from '../../../assets/img/logo/white-logo.png';

const Header = (props) => {
	const { parentMenu, secondParentMenu, activeMenu,  } = props;
	const [isVisible, setIsVisible] = useState(false);


	const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

	

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	

	return (
		<React.Fragment>
			<>
				{/* main header */}
				<header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
					{/* header-top */}
					<TopHeader />
					{/* header-lower */}
					<div className="header-lower">
						<div className="outer-container">
							<div className="outer-box">
								<div
									className="shape"
									style={{ backgroundImage: `url(${navShape})` }}
								/>
								<div className="menu-area">
									<div className="logo-box">
										<figure className="logo">
											<Link to="/">
												<img src={navImg} alt="" />
											</Link>
										</figure>
									</div>
									{/*Mobile Navigation Toggler*/}
									<div className="mobile-nav-toggler" onClick={handleMobileMenu}>
										<i className="icon-bar"></i>
										<i className="icon-bar"></i>
										<i className="icon-bar"></i>
									</div>
									<nav className="main-menu navbar-expand-md navbar-light clearfix">
										<div
											className="collapse navbar-collapse show clearfix"
											id="navbarSupportedContent"
										>
											<ul className="navigation clearfix">
												<MenuItems
													parentMenu={parentMenu}
													secondParentMenu={secondParentMenu}
													activeMenu={activeMenu}
												/>
											</ul>
										</div>
									</nav>
								</div>
								<div className="menu-right-content">
									<div className="support-box">
										<div className="icon-box gradient-color">
											<i className="icon-2" />
										</div>
										<Link to="tel:2395432170108">(239)-543-217-0108</Link>
									</div>
									<div className="btn-box">
										<Link to="/" className="theme-btn btn-one">
											<span>Let’s Contact</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*sticky Header*/}
					<div className="sticky-header">
						<div className="outer-container">
							<div className="outer-box">
								<div className="menu-area">
									<div className="logo-box">
										<figure className="logo">
											<Link to="/"><img src={stickyImg} alt="" /></Link>
										</figure>
									</div>
									<nav className="main-menu clearfix">
										<div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
											<ul className="navigation clearfix">
												<MenuItems
													parentMenu={parentMenu}
													secondParentMenu={secondParentMenu}
													activeMenu={activeMenu}
												/>
											</ul>
										</div>
									</nav>
								</div>
								<div className="menu-right-content">
									<div className="support-box">
										<div className="icon-box gradient-color"><i className="icon-2"></i></div>
										<Link to="tel:2395432170108">(239)-543-217-0108</Link>
									</div>
									<div className="btn-box">
										<Link to="/" className="theme-btn btn-one"><span>Let’s Contact</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End Sticky Menu */}
					
					<MobileMenu handleMobileMenu={handleMobileMenu} />
					
					
				</header>
				{/* main-header end */}
			</>
		</React.Fragment>
	);
}

export default Header;