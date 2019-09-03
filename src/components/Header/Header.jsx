import React from 'react';
import useScroll from 'react-use-scroll';

import Type from 'prop-types';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { ID, ROLE } from '../../constants/elementAttr';
import { routes } from '../../config/routes';

const Header = ({ openSidebar, isOpen }) => {
  const headerHeight = window.screen.width <= 960 ? 520 : 850;
  const scroll = useScroll();

  const { formatMessage } = useIntl();
  return (
    <header
      className={`${style.Header} ${
        scroll >= headerHeight ? style._scrolled : ''
      }`}>
      <div className={style.container}>
        <Link role={ROLE.MENU_ITEM} to={routes.home}>
          <h1 className={style.pageTitle} role={ROLE.HEADING} aria-level={1}>
            <Logo className={style.logo} />
          </h1>
        </Link>
        <button
          className={`_reset ${style.button}`}
          id={ID.MENU_OPEN}
          aria-haspopup={true}
          aria-expanded={isOpen}
          aria-label={formatMessage({ id: 'header.button' })}
          onClick={openSidebar}
          aria-controls={ID.MENU}>
          <span className={`${style.bar} ${style._left}`} />
          <span className={`${style.bar} ${style._right}`} />
          <span className={`${style.bar} ${style._left}`} />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  openSidebar: Type.func.isRequired,
  isOpen: Type.bool.isRequired,
};

export { Header };
