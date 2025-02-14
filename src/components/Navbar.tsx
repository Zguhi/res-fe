import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/menu">Thực đơn</Link></li>
                <li><Link to="/reservation">Đặt bàn</Link></li>
                <li><Link to="/order">Gọi món</Link></li>
            </ul>
            <button
                className="navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
        </nav>
    );
};

export default Navbar;