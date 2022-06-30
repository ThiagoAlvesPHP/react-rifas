// LIBs
import React, { useContext } from 'react';

// COMPOENTS 
import { Menu } from "../../components/Menu";
import { Carousel } from "../../components/Carousel";

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// CONTEXT
import { Context } from '../../core/contexts';

import img from '../../components/Carousel/images/1.png';

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

  const list = [
    {image: img, product: 'Moto Honda', date:'30/07/2022', id:1},
    {image: img, product: 'Moto Yamaha', date:'28/07/2022', id:2},
    {image: img, product: 'Calular Xiaome', date:'22/07/2022', id:3}
  ];

  return (
    <div className='home'>
      <Menu />
      <Carousel props={list} />
      Home
    </div>
  )
}