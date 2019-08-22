import React from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { routes } from '../../config/routes';

import style from './Sidebar.module.css';
import { ID, ROLE } from '../../constants/elementAttr';

let Sidebar = ({ closeSidebar, open, active }) => {
  const { formatMessage } = useIntl();
  return active ? (
    <nav
      role={ROLE.NAVIGATION}
      className={`${style.Sidebar} ${open ? style._open : ''}`}
      onClick={closeSidebar}>
      <div className={style.container}>
        <ul
          className={style.menu}
          id={ID.MENU}
          role={ROLE.MENU}
          aria-labelledby={ID.MENU_OPEN}>
          <li role={ROLE.NONE} className={style.menuItem}>
            <Link role={ROLE.MENU_ITEM} to={routes.home}>
              {formatMessage({ id: 'sidebar.home.label' })}
              <span className={style.description}>
                {formatMessage({ id: 'sidebar.home.description' })}
              </span>
            </Link>
          </li>
          <li role={ROLE.NONE} className={style.menuItem}>
            <Link
              role={ROLE.MENU_ITEM}
              rel={formatMessage({ id: 'sidebar.about.label' })}
              to={routes.about}>
              {formatMessage({ id: 'sidebar.about.label' })}
              <span className={style.description}>
                {formatMessage({ id: 'sidebar.about.description' })}
              </span>
            </Link>
          </li>
          <li role={ROLE.NONE} className={style.menuItem}>
            <Link
              role={ROLE.MENU_ITEM}
              rel={formatMessage({ id: 'sidebar.tech.label' })}
              to={routes.tech}>
              {formatMessage({ id: 'sidebar.tech.label' })}
              <span className={style.description}>
                {formatMessage({ id: 'sidebar.tech.description' })}
              </span>
            </Link>
          </li>
          <li role={ROLE.NONE} className={style.menuItem}>
            <Link
              role={ROLE.MENU_ITEM}
              rel={formatMessage({ id: 'sidebar.contact.label' })}
              to={routes.contact}>
              {formatMessage({ id: 'sidebar.contact.label' })}
              <span className={style.description}>
                {formatMessage({ id: 'sidebar.contact.description' })}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    ''
  );
};

Sidebar.propTypes = {
  open: Type.bool.isRequired,
  active: Type.bool.isRequired,
  closeSidebar: Type.func.isRequired,
};

export { Sidebar };
