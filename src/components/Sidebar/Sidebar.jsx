import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';

import { routes } from '../../config/routes';

import style from './Sidebar.module.css';
import { ID, ROLE } from '../../constants/elementAttr';

let Sidebar = ({ intl: { formatMessage } }) => (
  <nav role={ROLE.NAVIGATION} className={style.Sidebar}>
    <ul
      className={style.menu}
      id={ID.MENU}
      role={ROLE.MENU}
      aria-labelledby={ID.MENU_OPEN}>
      <li role={ROLE.NONE} className={style.menuItem}>
        <Link role={ROLE.MENU_ITEM} to={routes.home}>
          {formatMessage({ id: 'sidebar.home' })}
        </Link>
      </li>
      <li role={ROLE.NONE} className={style.menuItem}>
        <Link
          role={ROLE.MENU_ITEM}
          rel={formatMessage({ id: 'sidebar.about' })}
          to={routes.about}>
          {formatMessage({ id: 'sidebar.about' })}
        </Link>
      </li>
      <li role={ROLE.NONE} className={style.menuItem}>
        <Link
          role={ROLE.MENU_ITEM}
          rel={formatMessage({ id: 'sidebar.tech' })}
          to={routes.tech}>
          {formatMessage({ id: 'sidebar.tech' })}
        </Link>
      </li>
      <li role={ROLE.NONE} className={style.menuItem}>
        <Link
          role={ROLE.MENU_ITEM}
          rel={formatMessage({ id: 'sidebar.contact' })}
          to={routes.contact}>
          {formatMessage({ id: 'sidebar.contact' })}
        </Link>
      </li>
    </ul>
  </nav>
);

Sidebar.propTypes = {
  intl: intlShape.isRequired,
};

Sidebar = injectIntl(Sidebar);

export { Sidebar };
