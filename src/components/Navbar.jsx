// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>TechNova Solutions</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <span>Menu</span>
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link 
                              to="home" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                              Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="service" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             Service
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="Works" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             Works
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="Team" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             Team
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="Testimonial" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             Testimonial
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="Contact" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                              to="FAQ" 
                              spy={true} 
                              smooth={true} 
                              offset={-70} 
                              duration={500}
                            >
                             FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
