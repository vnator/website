import React from 'react';
import { useIntl } from 'react-intl';

import style from './Footer.module.css';

import { LINKS } from '../../constants/links';
import { CHANEL } from '../../constants/chanel';

import {
  IconVnator,
  IconGithub,
  IconLinkedin,
  IconStackshare,
  IconMedium,
  IconEmail,
} from '../Icon';

let Footer = () => {
  const { formatMessage } = useIntl();
  let switchIcon = (social) => {
    switch (social) {
      case CHANEL.GITHUB:
        return <IconGithub className={style.icon} />;
      case CHANEL.LINKEDIN:
        return <IconLinkedin className={style.icon} />;
      case CHANEL.STACKSHARE:
        return <IconStackshare className={style.icon} />;
      case CHANEL.MEDIUM:
        return <IconMedium className={style.icon} />;
      default:
        return <IconEmail className={style.icon} />;
    }
  };

  return (
    <footer className={style.Footer}>
      <div className={style.container}>
        <small className={style.copyRight}>
          <span className={style.copyIcon}>&copy;</span>{' '}
          {formatMessage({ id: 'footer.copyRight' })}
        </small>
        <IconVnator className={style.vnator} />
        <ul className={style.list}>
          {Object.values(LINKS).map((link) => (
            <li key={link.rel}>
              <a
                className={style.item}
                {...link}
                aria-label={formatMessage({
                  id: `footer.externalLinks.${link.rel}`,
                })}>
                {switchIcon(link.rel)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
