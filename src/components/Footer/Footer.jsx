import React from 'react';
import { useIntl } from 'react-intl';

import style from './Footer.module.css';
import { SOCIAL } from '../../constants/externalLinks';

let Footer = () => {
  const { formatMessage } = useIntl();
  return (
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
};

export { Footer };
