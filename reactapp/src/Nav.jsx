import React from "react";
import { Outlet } from "react-router-dom";
import './Nav.css';

const Nav = () => {
 
    return (
        <div>
            <header id="header" className="white unlocked">
                <nav className="wrapper">    
                    <a id="logo" href="/">Pokuong Lao</a>
                    <span className="mobile_menu"></span>
                    <ul className="menu">
                        <li>
                            <a data-anchor="pokuong" href="/pokuong">Pokuong
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a data-anchor="communities" href="/communities">Communities
                                <span></span>
                            </a>
                        </li>
                        <li className="has-submenu">
                            <a href="/listing">Listing
                                <span></span>
                            </a>
                            <span className="submenu_wrapper">
                                <ul className="submenu"> 
                                    <li>
                                        <a href="/listing/lease">Lease</a>
                                    </li>
                                    <li>
                                        <a href="/listing/mls">MLS Search</a>
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li>
                            <a data-anchor="blog" href="/blog">Blog
                                <span></span>
                            </a>
                        </li>
                        <li className="has-submenu">
                            <a data-anchor="contact" href="/contact">Contact<span></span></a>
                            <span id="contact-submenu" className="submenu_wrapper inactive">
                                <ul className="submenu">
                                    <li><a href="tel:+16262728808">(626) 272-8808
                                    </a>
                                    </li>
                                    <li><a href="contact/">pokuonglao@outlook.com
                                    </a>
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li className="private">
                            <a data-anchor="private" href="private/">  
                                Private
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Nav;
