// LIBs
import React, { useContext } from 'react';

// COMPOENTS 
import { Menu } from "../../components/Menu";

// STYLE
import './style.scss';

export function contactView() {

  const { state, dispatch } = useContext(Context);

  return (
    <div className='home'>
      <Menu />
    </div>
  )
}