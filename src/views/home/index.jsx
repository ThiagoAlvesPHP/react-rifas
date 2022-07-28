// LIBs
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// STYLE
import './style.scss';

// Components
import { MenuLeft } from '../../components/MenuLeft';
import { MenuRight } from '../../components/MenuRight';

export function HomeView() {
  const [menu, setMenu] = useState(0);  
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookie.get('token')) { navigate('/login'); }
  }, [])

  return (
    <div className='home'>
      <MenuLeft menu={menu} setMenu={setMenu} />
      <div className='container'>
        <MenuRight menu={menu} setMenu={setMenu} />
        <div className='content'>
          <h1 className='title'>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}