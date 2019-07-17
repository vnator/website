import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Home } from '../../pages/Home/Home';

import style from './Main.module.css';
import { Sidebar } from '../Sidebar/Sidebar';

const Main = () => (
  <div className={style.Main}>
    <Header />
    <section>
      <Home />
    </section>
    <Sidebar />
    <Footer />
  </div>
);

export { Main };
