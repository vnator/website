import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Home.module.css';

let Home = ({ intl: { formatMessage } }) => (
  <div className={style.Home}>{formatMessage({ id: 'home.title' })}</div>
);

Home = injectIntl(Home);

Home.propTypes = {
  intl: intlShape.isRequired,
};

export { Home };
