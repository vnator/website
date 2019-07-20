import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { ID, ROLE } from '../../constants/elementAttr';

let Header = ({ intl: { formatMessage } }) => (
  <header className={style.Header}>
    <h1 className={style.pageTitle} role={ROLE.HEADING} aria-level={1}>
      <Logo width="auto" height="120px" />
    </h1>

    <button
      className={`_reset ${style.button}`}
      id={ID.MENU_OPEN}
      aria-haspopup={true}
      aria-expanded={true}
      aria-label={formatMessage({ id: 'header.button' })}
      aria-controls={ID.MENU}>
      open Sidebar
    </button>
  </header>
);

Header.propTypes = {
  intl: intlShape.isRequired,
};

Header = injectIntl(Header);

export { Header };
