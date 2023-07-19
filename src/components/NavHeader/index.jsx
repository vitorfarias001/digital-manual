import logo from "../../assets/logo.png"
import "./styles.css"
import { FaSearch } from 'react-icons/fa';

function NavHeader() {
    return (
        <div className='navbar-header'>
            <div className='navheader-container'>
                <div className='nav-header'>
                    <a className='navbar-brand'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <ul className="menu-header">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Inline Documentation</li>
                    <li className="menu-item">Private Doc</li>
                    <li className="menu-item">Search</li>
                </ul>
                <div className="search-bar">
                    <FaSearch />
                    <input type="text" placeholder="Have a question? Ask or enter a search term." />
                </div>
            </div>
        </div>
    )
}

export default NavHeader;