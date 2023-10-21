import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import './Nav.css';
/*import logo from '../image/logo.png'; // Replace with the actual path to your logo image*/

const Nav = () => {
    const location = useLocation();

    // Check if the current page is not the welcome page
    const isNotWelcomePage = location.pathname !== '/';

    // Apply the black background class conditionally
    const navMenuClassName = `wrapper ${isNotWelcomePage ? 'black-background' : ''}`;

    return (
        <div>
            <header id="header" className="white unlocked">
                <nav className={navMenuClassName}>
                    {/*<img src={logo} alt="Logo" />*/}
                    <a id="logo" href="/">Pokuong Lao</a>
                    <span className="mobile_menu"></span>
                    <ul className="menu">
                        <li className="heart">
                            <a data-anchor="pokuong" href="/pokuong">Pokuong
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="/listing">Listing
                                <span></span>
                            </a>
                            <span className="submenu_wrapper">
                                <ul className="submenu">
                                    ::before
                                    <li>
                                        <a href="/listing/lease">Lease</a>
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Nav;
