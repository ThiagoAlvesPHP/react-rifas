// LIBs
import { 
    RiDashboard3Fill, 
    RiCloseCircleLine, 
    RiShieldUserFill,
    RiUserFollowFill,
    RiMoneyDollarCircleFill,
    RiMailSendFill,
    RiStackshareLine,
    RiSteamFill 
} from "react-icons/ri";
import React, { useEffect } from 'react';
// STYLE
import './style.scss';

export function MenuLeft(props) {
    /**
     * closeMenu
     */
    function closeMenu() {
        props.setMenu(0);
    }

    return (
        <div className={`menu-left ${props.menu == 1  ? 'active' :''}`}>
            <div className={`close ${props.menu == 1  ? 'active' :''}`} onClick={closeMenu}>
                <RiCloseCircleLine />
            </div>
            <div className="logo">
                <img src="./assets/images/logo.png" width="60" alt="Logo" className="img" />
            </div>
            <hr className="division" />
            <nav className='navbar'>
                <ul className="list">
                    <li><RiDashboard3Fill /> <span className="text">Dashboard</span></li>
                    <li><RiShieldUserFill /> <span className="text">Usuários</span></li>
                    <li><RiUserFollowFill /> <span className="text">Clientes</span></li>
                    <li><RiMoneyDollarCircleFill /> <span className="text">Financeiro</span></li>
                    <li><RiMailSendFill /> <span className="text">Newsletters</span></li>
                    <li><RiStackshareLine /> <span className="text">Site</span></li>
                    <li><RiSteamFill /> <span className="text">Config</span></li>
                </ul>
            </nav>
        </div>
    )
}