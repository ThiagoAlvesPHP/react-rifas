// LIBs
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    RiDashboard3Fill,
    RiTimeLine,
    RiShieldUserFill,
    RiUserFollowFill
} from "react-icons/ri";

// UTILs
import * as Cookie from '../../core/utils/Cookie';

// STYLE
import './style.scss';

// Components
import { MenuLeft } from '../../components/MenuLeft';
import { MenuRight } from '../../components/MenuRight';
import { Cards } from '../../components/Cards';

export function HomeView() {
  const [menu, setMenu] = useState(0);  
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [datenew, setDateNew] = useState();
  const [mode, setMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookie.get('token')) { navigate('/login'); }

    let day = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    let date = new Date();
    setDay(day[date.getDay()]);

    var dia = String(date.getDate()).padStart(2, '0');
    var mes = String(date.getMonth() + 1).padStart(2, '0');
    var ano = date.getFullYear();
    setDateNew(dia + '/' + mes + '/' + ano);
  }, [])

  useEffect(() => {
    setInterval(function () {
      setTime(((new Date).toLocaleString().substr(11, 8)));
    }, 1000);
  }, [time]);

  return (
    <div className={`home ${mode ? 'dark' :'light'}`}>
      
      <MenuLeft menu={menu} setMode={setMode} setMenu={setMenu} />

      <div className='container'>
        <MenuRight menu={menu} setMenu={setMenu} />
        <div className='content'>
          <h1 className='title'><RiDashboard3Fill /> Dashboard</h1>
          <hr className="division" />

          <section className="cards">
            <Cards color={`#dff0d8`} icon={RiTimeLine} title={time} subtitle={day} text={datenew} link={`home`} />
            <Cards color={`#337ab7`} icon={RiShieldUserFill} title={`Usuários`} subtitle={2} text={datenew} link={`users`} />
            <Cards color={`#d9edf7`} icon={RiUserFollowFill} title={`Clientes`} subtitle={3} text={datenew} link={`customers`} />
          </section>
        </div>
      </div>
    </div>
  )
}