import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Tech } from '../../pages/Tech/Tech';

import style from './Main.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { routes } from '../../config/routes';

const Main = () => (
  <div className={style.Main}>
    <Header />
    <Sidebar />
    <section>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.about} component={About} />
      <Route path={routes.tech} component={Tech} />
      <Route path={routes.contact} component={Contact} />
    </section>
    <Footer />
  </div>
);

export { Main };
