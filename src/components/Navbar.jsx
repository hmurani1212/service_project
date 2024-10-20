import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import Navbarsmall from './Navbarsmall';
import image from "../image/logo3.png"
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [fisrtName, setFisrtName] = useState(true); // Determines if the Navbarsmall is visible
    const [lastScrollTop, setLastScrollTop] = useState(0); // To track the scroll position
    const [scrollingDown, setScrollingDown] = useState(false);
    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Hide the small navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop) {
            // Scroll down
            setScrollingDown(true);
            setFisrtName(false); // Hide Navbarsmall
        } else {
            // Scroll up
            if (scrollTop === 0) {
                setFisrtName(true); // Show Navbarsmall when at the top
            }
        }

        setScrolled(scrollTop > 0); // Add red background to navbar when scrolled
        setLastScrollTop(scrollTop); // Update the last scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            {fisrtName && <Navbarsmall />} {/* Small navbar at the top */}

            {/* Main Navbar */}
            <nav className={`navbar   mb-10 ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="logo flex">
                        <h1 className='hidden sm:flex'>RAAQATECH</h1>
                        <img src={image} className='w-24 p-2 h-20' alt='company_logo'></img>

                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <span><MenuIcon style={{ color: "white" }} /></span>
                    </div>
                    <div className={`nav-elements  ${showNavbar ? "active" : ""}`}>
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
                            {/* <li>
                                <Link
                                    to="Testimonial"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Testimonial
                                </Link>
                            </li> */}
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
