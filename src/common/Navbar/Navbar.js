import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '/images/logo.png'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className='container flex_space'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><Link to='./' onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to='./about' onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to='./gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                        <li><Link to='./contact' onClick={closeMobileMenu}>Contact Us</Link></li>

                    </ul>
                    <div className='login-area flex'>
                        <li>
                            <Link to='/sign-in'>
                                <i className='far fa-chevron-right'>Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <i className='far fa-chevron-right'>Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <button className='primary-btn'>Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>

            </nav>
            <header>
                <div className='container flex_space'>
                    <div className='logo'>
                        <img className="logo-image" src="/images/logo.png" alt='' />
                    </div>
                    <div className='contact flex_space'>
                        <div className='box flex_space'>
                            <div className='icons'>
                                <i className='fas fa-phone'></i>
                            </div>
                            <div className='text'>
                                <h4>Call Us</h4>
                                <Link to="/contact">+11 123 5679</Link>
                            </div>
                        </div>
                        <div className='box flex_space'>
                            <div className='icons'>
                                <i className='fas fa-envelope'></i>
                            </div>
                            <div className='text'>
                                <h4>Mail Us</h4>
                                <Link to="/contact">sunnyhotel@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar