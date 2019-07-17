import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Footer.module.css';

let Footer = ({ intl: { formatMessage } }) => (
  <div className={style.Footer}>{formatMessage({ id: 'footer.title' })}</div>
);

Footer = injectIntl(Footer);

Footer.propTypes = {
  intl: intlShape.isRequired,
};

export { Footer };
