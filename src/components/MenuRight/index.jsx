// LIBs
import React, { useState, useEffect } from 'react';
import { BiLogOutCircle, BiMenu } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// STYLE
import './style.scss';

export function MenuRight(props) {
    const baseURL = "http://localhost:8000/api/";
    const [user, setUser] = useState();
    const config = {
        headers: { Authorization: `Bearer ${Cookie.get('token')}` }
    };
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseURL}user`, config).then((e) => {
            if (e.data.error == '') {
                setUser(e.data.find);
            }
        });
    }, []);
    /**
     * menu
     */
    function showMenu() {
        props.setMenu(1);
    }
    /**
     * logout
     */
    function logout() {
        axios.get(`${baseURL}auth/logout`, config).then((e) => {
            Cookie.remove('token');
            navigate("../login");
        });
    }
    return (
        <div className='menu-right'>
            <div className="menu">
                <p className={`name ${props.menu == 1  ? 'active' :''}`}>{user && user.name}</p>
                <div className="left">
                    <p className="logout" onClick={logout}>
                        <BiLogOutCircle />
                    </p>
                    <p className="showmenu" onClick={showMenu}>
                        <BiMenu />
                    </p>
                </div>
            </div>
        </div>
    )
}