import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Sidebar.module.css';

let Sidebar = ({ intl: { formatMessage } }) => (
  <div className={style.Sidebar}>{formatMessage({ id: 'sidebar.title' })}</div>
);

Sidebar = injectIntl(Sidebar);

Sidebar.propTypes = {
  intl: intlShape.isRequired,
};

export { Sidebar };
