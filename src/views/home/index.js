// LIBs
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// STYLE
import './style.scss';

// Components
import { MenuLeft } from '../../components/MenuLeft';

export function HomeView() {
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookie.get('token')) { navigate('/login'); }
  }, [])

  return (
    <div className='home'>
      <MenuLeft />
    </div>
  )
}