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
    const [list, setList] = useState([{link:'/', name:'home'},
    {link:'/sweepstakes', name:'Sorteios'},
    {link:'/doubt', name:'Dúvidas Frequentes'},
    {link:'/contact', name:'Contato'}]);

    useEffect(() => {

        // console.log(list);
    }, []);

    return (
        <nav className='navbar'>
            <div className='content'>
                <Link to='/' className='logo'>
                    <img className='logo-img' src={logo} alt='Logo do Site' />
                </Link>

                <ul className='links desktop'>
                    { list.map( (e, key) => <li key={key}><Link className='link' to={e.link}>{e.name}</Link></li>) }
                    <li className='link modal'>Cliente</li>
                </ul>
                <div onClick={(e) => setNavbar(true)} className='hamburger'>
                    <GiHamburgerMenu />
                </div>
            </div>

            <div className={`navbar-mobile ${navbar ? 'active' : ''}`}>
                <div className='close' onClick={(e) => setNavbar(false)}><FaWindowClose /></div>
                <div className='links'>
                    { list.map( (e, key) => <Link key={key} className='link' to={e.link}>{e.name}</Link>) }
                    <div className='link modal'>Cliente</div>
                </div>
            </div>
        </nav>
    )
}