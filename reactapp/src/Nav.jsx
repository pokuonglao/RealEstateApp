import { Outlet, Link } from "react-router-dom";
import './Nav.css';
import logo from '../image/logo.png'; // Replace with the actual path to your logo image

const Nav = () => {
    return (
        <div>
            <header id="header">
                <nav className="nav-menu">
                    <img src={logo} alt="Logo" />
                    <p>Pokuong Lao</p>
                    <span className="mobile_menu"></span>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/listing">Listing</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
};

export default Nav;