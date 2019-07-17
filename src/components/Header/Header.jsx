import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Header.module.css';

let Header = ({ intl: { formatMessage } }) => (
  <div className={style.Header}>{formatMessage({ id: 'header.title' })}</div>
);

Header = injectIntl(Header);

Header.propTypes = {
  intl: intlShape.isRequired,
};

export { Header };
