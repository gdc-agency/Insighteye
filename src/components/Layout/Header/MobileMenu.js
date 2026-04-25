'use client'
import { Link } from 'react-router-dom';
import { useState } from "react";
import mobileIcon from '../../../assets/images/logo-2.png';

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>

            {/*Mobile Menu */}
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                
                <nav className="menu-box">
                    <div className="nav-logo"><Link to="/"><img src={mobileIcon} alt="" /></Link></div>
                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                            
                                <li className={isActive.key === 1 ? "dropdown current" : "dropdown"}><Link to="/" onClick={handleMobileMenu}>Home</Link>
                                    <ul style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}>
                                        <li><Link to="/" onClick={handleMobileMenu}>Home Page One</Link></li>
                                        <li><Link to="/home-2" onClick={handleMobileMenu}>Home Page Two</Link></li>
                                        <li><Link to="/home-3" onClick={handleMobileMenu}>Home Page Three</Link></li>
                                        <li className={isActive.subMenuKey === 2 ? "dropdown current" : "dropdown"}>
                                        
                                        <Link to="/" onClick={handleMobileMenu}>Header Style</Link>
                                        <ul style={{ display: `${isActive.subMenuKey === 2 ? "block" : "none"}` }}>
                                            <li><Link to="/" onClick={handleMobileMenu}>Header Style 01</Link></li>
                                            <li><Link to="/home-2" onClick={handleMobileMenu}>Header Style 02</Link></li>
                                            <li><Link to="/home-3" onClick={handleMobileMenu}>Header Style 03</Link></li>
                                        </ul>

                                        <div className={isActive.subMenuKey === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 2)}><span className="fa fa-angle-right" /></div>
                                    </li>
                                    </ul>
                                    <div className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link to="/about/" onClick={handleMobileMenu}>About Us</Link></li>
                                <li className={isActive.key === 3 ? "dropdown current" : "dropdown"}><Link to="/#" onClick={handleMobileMenu}>Services</Link>
                                    <ul style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}>
                                        <li><Link to="/service" onClick={handleMobileMenu}>Our Service 1</Link></li>
                                        <li><Link to="/service/service-2" onClick={handleMobileMenu}>Our Service 2</Link></li>
                                        <li><Link to="/service/service-details" onClick={handleMobileMenu}>Personal Protection</Link></li>
                                        <li><Link to="/service/service-details-2" onClick={handleMobileMenu}>Infidelity Investigation</Link></li>
                                        <li><Link to="/service/service-details-3" onClick={handleMobileMenu}>Surveillance Services</Link></li>
                                        <li><Link to="/service/service-details-4" onClick={handleMobileMenu}>CCTV Security</Link></li>
                                        <li><Link to="/service/service-details-5" onClick={handleMobileMenu}>Security Consulting</Link></li>
                                        <li><Link to="/service/service-details-6" onClick={handleMobileMenu}>Assets Investigation</Link></li>
                                    </ul>

                                    <div className={isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>


                                <li className={isActive.key === 4 ? "dropdown current" : "dropdown"}>
                                    <Link to="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key === 4 ? "block" : "none"}` }}>
                                        <li className={isActive.subMenuKey === 5 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Team</Link>
                                            <ul style={{ display: `${isActive.subMenuKey === 5 ? "block" : "none"}` }}>
                                                <li><Link to="/team" onClick={handleMobileMenu}>Our Team 1</Link></li>
                                                <li><Link to="/team/team-2" onClick={handleMobileMenu}>Our Team 2</Link></li>
                                                <li><Link to="/team/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey === 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey === 6 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Case</Link>
                                            <ul style={{ display: `${isActive.subMenuKey === 6 ? "block" : "none"}` }}>
                                                <li><Link to="/case" onClick={handleMobileMenu}>Case Study</Link></li>
                                                <li><Link to="/case/case-details" onClick={handleMobileMenu}>Case Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey === 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link to="/faq" onClick={handleMobileMenu}>FAQs</Link></li>
                                        <li><Link to="/error" onClick={handleMobileMenu}>Page Not Found</Link></li>
                                    </ul>
                                    <div className={isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>



                                <li className={isActive.key === 7 ? "dropdown current" : "dropdown"}>
                                    <Link to="/#" onClick={handleMobileMenu}>Blog</Link>
                                    <ul style={{ display: `${isActive.key === 7 ? "block" : "none"}` }}>
                                        <li><Link to="/blog" onClick={handleMobileMenu}>Blog Grid</Link></li>
                                        <li><Link to="/blog/blog-standard" onClick={handleMobileMenu}>Blog Standard</Link></li>
                                        <li><Link to="/blog/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key === 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link to="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    
                </nav>
            </div>
            {/*End Mobile Menu */}
            
            
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
export default MobileMenu;
