// LIBs
import React, { useContext } from 'react';

// COMPOENTS 
import { Menu } from "../../components/Menu";

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// CONTEXT
import { Context } from '../../core/contexts';

// STYLE
import './style.scss';

export function HomeView() {

  const { state, dispatch } = useContext(Context);

  // function changeName() {
  //   dispatch({
  //     type: 'CHANGE_ALL',
  //     payload: {
  //       name: 'Diogo',
  //       age: 18
  //     }
  //   })

  //   let options = {
  //     type: true, 
  //     expires: 0.1
  //   };

  //   Cookie.set('name', 'Diogo', options);
  // }

  // function removeCookie() {
  //   Cookie.remove('name');
  // }

  return (
    <div className='home'>
      <Menu />
    </div>
  )
}