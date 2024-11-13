    import React from 'react';
    import { Link } from 'react-router-dom';
    import '../Css/Navbar.css';
    import logo from '../Images/ud.png'

    import logoImage from '../Images/logo.png'; 

    const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to='/'><img src={logoImage} alt="Logo" className="logo-image" /></Link>
                <h1 className="logo">
                <Link to='/'>
                    {/* <span style={{ color: '#051b3a', fontFamily: 'Caveat, cursive', transform: 'skew(-50deg)' }}>
                        <span style={{ fontSize: '25px' }}>V</span>erse
                    </span>
                    <span style={{ color: '#92b1e8', fontFamily: 'Caveat, cursive', transform: 'skew(-50deg)' }}>
                        <span style={{ fontSize: '25px' }}>T</span>ales
                    </span> */}
                    <img src={logo} style={{ width: '150px', height: '100%'}} />
                </Link>
                </h1>
                <div className="search-bar">
                <input type="text" className='search-input' placeholder="Search stories" />
                </div>
            </div>
            <div className="navbar-right">
                <Link to='/about'><button className="btn about-button">About</button></Link>
                <Link to='/contact'><button className="btn about-button">Contact</button></Link>
                <button className="login-signup">Login</button>
            </div>
        </nav>
    );
    };

    export default Navbar;
