import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Home } from '../../pages/Home/Home';

import style from './Main.module.css';

const Main = () => (
  <div className={style.Main}>
    <Header />
    <Home />
    <Footer />
  </div>
);

export { Main };
