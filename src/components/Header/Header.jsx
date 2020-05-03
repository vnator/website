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
          <svg
            className={`${style.bar} ${style._left}`}
            id="icon-traco"
            viewBox="0 0 205 32">
            <path d="M204.464 2.988c0-1.801-2.177-2.702-6.532-2.702l-7.621 0.811c-9.798 2.522-31.572 3.603-65.321 3.243l-84.917-0.27c0 0-35.826-0.060-36.423 4.584l-2.145 5.31-1.169 12.805c0.612 8.923 33.746 3.193 42.558 2.476 3.266-0.18 11.87-0.581 18.402-0.581 6.532-0.18 12.695 0.671 22.465-0.072l27.881-1.414 22.982 2.275c10.887-0.18 20.359 0.452 20.359 0.452s16.691 2.056 25.472-1.184c5.961-4.973 9.353-10.938 19.151-15.802 3.21-1.515 3.823-8.116 4.856-9.93z"></path>
          </svg>

          <svg
            className={`${style.bar} ${style._right}`}
            id="icon-traco"
            viewBox="0 0 205 32">
            <path d="M204.464 2.988c0-1.801-2.177-2.702-6.532-2.702l-7.621 0.811c-9.798 2.522-31.572 3.603-65.321 3.243l-84.917-0.27c0 0-35.826-0.060-36.423 4.584l-2.145 5.31-1.169 12.805c0.612 8.923 33.746 3.193 42.558 2.476 3.266-0.18 11.87-0.581 18.402-0.581 6.532-0.18 12.695 0.671 22.465-0.072l27.881-1.414 22.982 2.275c10.887-0.18 20.359 0.452 20.359 0.452s16.691 2.056 25.472-1.184c5.961-4.973 9.353-10.938 19.151-15.802 3.21-1.515 3.823-8.116 4.856-9.93z"></path>
          </svg>

          <svg
            className={`${style.bar} ${style._left}`}
            id="icon-traco"
            viewBox="0 0 205 32">
            <path d="M204.464 2.988c0-1.801-2.177-2.702-6.532-2.702l-7.621 0.811c-9.798 2.522-31.572 3.603-65.321 3.243l-84.917-0.27c0 0-35.826-0.060-36.423 4.584l-2.145 5.31-1.169 12.805c0.612 8.923 33.746 3.193 42.558 2.476 3.266-0.18 11.87-0.581 18.402-0.581 6.532-0.18 12.695 0.671 22.465-0.072l27.881-1.414 22.982 2.275c10.887-0.18 20.359 0.452 20.359 0.452s16.691 2.056 25.472-1.184c5.961-4.973 9.353-10.938 19.151-15.802 3.21-1.515 3.823-8.116 4.856-9.93z"></path>
          </svg>
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
