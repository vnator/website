import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';

import { routes } from '../../config/routes';

import style from './Sidebar.module.css';

let Sidebar = ({ intl: { formatMessage } }) => (
  <div className={style.Sidebar}>
    <ul>
      <li>
        <Link to={routes.home}>{formatMessage({ id: 'sidebar.home' })}</Link>
      </li>
      <li>
        <Link to={routes.about}>{formatMessage({ id: 'sidebar.about' })}</Link>
      </li>
      <li>
        <Link to={routes.tech}>{formatMessage({ id: 'sidebar.tech' })}</Link>
      </li>
      <li>
        <Link to={routes.contact}>
          {formatMessage({ id: 'sidebar.contact' })}
        </Link>
      </li>
    </ul>
  </div>
);

Sidebar = injectIntl(Sidebar);

Sidebar.propTypes = {
  intl: intlShape.isRequired,
};

export { Sidebar };
