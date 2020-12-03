import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Tech } from '../../pages/Tech/Tech';

import style from './Main.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { routes } from '../../config/routes';

const Main = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setActive(true);

    setTimeout(() => {
      setOpen(true);
    }, 50);
  };

  const closeSidebar = () => {
    setOpen(false);

    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  return (
    <div className={style.Main}>
      <Header openSidebar={openSidebar} isOpen={open} />
      <Sidebar closeSidebar={closeSidebar} active={active} open={open} />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
        <Route path={routes.stack} component={Tech} />
        <Route path={routes.contact} component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export { Main };
