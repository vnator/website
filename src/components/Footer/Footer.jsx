import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Footer.module.css';
import { SOCIAL } from '../../constants/externalLinks';

let Footer = ({ intl: { formatMessage } }) => (
  <footer className={style.Footer}>
    <small>&copy; {formatMessage({ id: 'footer.copyRight' })}</small>
    <ul>
      {Object.values(SOCIAL).map(link => (
        <li>
          <a
            {...link}
            aria-label={formatMessage({
              id: `footer.externalLinks.${link.rel}`,
            })}>
            icon {link.rel}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

Footer.propTypes = {
  intl: intlShape.isRequired,
};

Footer = injectIntl(Footer);

export { Footer };
