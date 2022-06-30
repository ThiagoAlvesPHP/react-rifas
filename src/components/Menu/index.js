// LIBs
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

// MIDIAS
import logo from './images/logo.png';  

// STYLE
import './style.scss';

export function Menu() {

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        // console.log(navbar);
    }, [navbar]);

    return (
        <nav className='navbar'>
            <div className='content'>
                <Link to='./' className='logo'>
                    <img className='logo-img' src={logo} alt='Logo do Site' />
                </Link>

                <div onClick={(e) => setNavbar(true)} className='hamburger'>
                    <GiHamburgerMenu />
                </div>
            </div>

            <div className={`navbar-mobile ${navbar ? 'active' : ''}`}>
                <div className='close' onClick={(e) => setNavbar(false)}><FaWindowClose /></div>
                <div className='links'>
                    <Link className='link' to='./'>Home</Link>
                    <Link className='link' to='./sweepstakes'>Sorteios</Link>
                    <Link className='link' to='./doubt'>Dúvidas Frequentes</Link>
                    <Link className='link' to='./contact'>Contato</Link>
                    <div className='link modal'>Cliente</div>
                </div>
            </div>
        </nav>
    )
}