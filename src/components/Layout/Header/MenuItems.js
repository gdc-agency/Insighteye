import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu, secondParentMenu, activeMenu } = props;

    return (
        <React.Fragment>
            <li className={parentMenu === 'Home' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Home</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/" className={activeMenu === "/home-1"  ? "active-menu" : ""}>Home Page One</Link>
                    </li>
                    <li>
                        <Link to="/home-2" className={activeMenu === "/home-2" ? "active-menu" : ""}>Home Page Two</Link>
                    </li>
                    <li>
                        <Link to="/home-3" className={activeMenu === "/home-3" ? "active-menu" : ""}>Home Page Three</Link>
                    </li>

                    <li className={secondParentMenu === 'Home' ? 'dropdown current-menu-item' : 'dropdown'}>
                        <Link to="#">Header Style</Link>
                        <ul className="sub-menu right ">
                            <li>
                                <Link to="/" className={activeMenu === "/" ? "active-menu" : ""}>Header Style 01</Link>
                            </li>
                            <li>
                                <Link to="/home-2" className={activeMenu === "/home-2" ? "active-menu" : ""}>Header Style 02</Link>
                            </li>
                            <li>
                                <Link to="/home-3" className={activeMenu === "/home-3" ? "active-menu" : ""}>Header Style 03</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'about' ? 'current-menu-item' : ''}>
                <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>About Us</Link>
            </li>
            <li className={parentMenu === 'Services' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Services</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/service" className={activeMenu === "/service" ? "active-menu" : ""}>Our Service 1</Link>
                    </li>
                    <li>
                        <Link to="/service/service-2" className={activeMenu === "/service-2" ? "active-menu" : ""}>Our Service 2</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details" className={activeMenu === "/service-details" ? "active-menu" : ""}>Personal Protection</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details-2" className={activeMenu === "/service-details-2" ? "active-menu" : ""}>Infidelity Investigation</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details-3" className={activeMenu === "/service-details-3" ? "active-menu" : ""}>Surveillance Services</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details-4" className={activeMenu === "/service-details-4" ? "active-menu" : ""}>CCTV Security</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details-5" className={activeMenu === "/service-details-5" ? "active-menu" : ""}>Security Consulting</Link>
                    </li>
                    <li>
                        <Link to="/service/service-details-6" className={activeMenu === "/service-details-6" ? "active-menu" : ""}>Assets Investigation</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'page' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li className={secondParentMenu === 'Team' ? 'dropdown current-menu-item' : 'dropdown'}>
                        <Link to="#">Team</Link>
                        <ul className="sub-menu right ">
                            <li>
                                <Link to="/team" className={activeMenu === "/team" ? "active-menu" : ""}>Our Team 1</Link>
                            </li>
                            <li>
                                <Link to="/team/team-2" className={activeMenu === "/team-2" ? "active-menu" : ""}>Our Team 2</Link>
                            </li>
                            <li>
                                <Link to="/team/team-details" className={activeMenu === "/team-details" ? "active-menu" : ""}>Team Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={secondParentMenu === 'Case' ? 'dropdown current-menu-item' : 'dropdown'}>
                        <Link to="#">Case</Link>
                        <ul className="sub-menu right ">
                            <li>
                                <Link to="/case" className={activeMenu === "/case" ? "active-menu" : ""}>Case Study</Link>
                            </li>
                            <li>
                                <Link to="/case/case-details" className={activeMenu === "/case-details" ? "active-menu" : ""}>Case Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/faq" className={activeMenu === "/faq" ? "active-menu" : ""}>Faq</Link>
                    </li>
                    <li>
                        <Link to="/error" className={activeMenu === "/error" ? "active-menu" : ""}>Page Not Found</Link>
                    </li>
                    
                </ul>
            </li>
            <li className={parentMenu === 'blog' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/blog/blog-standard" className={activeMenu === "/blog-standard" ? "active-menu" : ""}>Blog Standard</Link>
                    </li>
                    <li>
                        <Link to="/blog/blog-details" className={activeMenu === "/blog-details" ? "active-menu" : ""}>Blog details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'current-menu-item' : ''}>
                <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>Contact</Link>
            </li>
            
        </React.Fragment>
    );
}

export default MenuItems;