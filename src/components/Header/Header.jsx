import React, { useEffect, useState } from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { ID, ROLE } from '../../constants/elementAttr';

const Header = ({ openSidebar, isOpen }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const width = window.screen.width <= 960 ? 600 : 860;

    if (document.documentElement.scrollTop > width && !scroll) {
      setScroll(true);
    } else if (document.documentElement.scrollTop <= width && scroll) {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll();

    return () => (window.onscroll = undefined);
  });

  const { formatMessage } = useIntl();
  return (
    <header className={`${style.Header} ${scroll ? style._scrolled : ''}`}>
      <div className={style.container}>
        <h1 className={style.pageTitle} role={ROLE.HEADING} aria-level={1}>
          <Logo className={style.logo} />
        </h1>
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
