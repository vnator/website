import React from 'react';
import { useIntl } from 'react-intl';

import imgDesktop from '../../img/banner-contact-desktop.jpeg';
import imgMobile from '../../img/banner-contact-mobile.jpeg';
import { Banner } from '../../components/Banner/Banner';
import { CHANEL } from '../../constants/chanel';
import { LINKS } from '../../constants/links';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Title } from '../../components/Title/Title';
import {
  IconEmail,
  IconMedium,
  IconStackshare,
  IconGithub,
  IconLinkedin,
} from '../../components/Icon';

import style from './Contact.module.css';

const Contact = () => {
  const { formatMessage } = useIntl();

  const switchIcon = (NAME) => {
    switch (NAME) {
      case CHANEL.EMAIL:
        return <IconEmail className={style.itemIcon} />;
      case CHANEL.MEDIUM:
        return <IconMedium className={style.itemIcon} />;
      case CHANEL.GITHUB:
        return <IconGithub className={style.itemIcon} />;
      case CHANEL.STACKSHARE:
        return <IconStackshare className={style.itemIcon} />;
      default:
        return <IconLinkedin className={style.itemIcon} />;
    }
  };

  return (
    <div className={style.Contact}>
      <Banner
        img={{ desktop: imgDesktop, mobile: imgMobile }}
        title={formatMessage({ id: 'contact.title' })}
        white
      />
      <div className={style.container}>
        <header className={style.header}>
          <Title>{formatMessage({ id: 'contact.subtitle' })}</Title>
          <div className={style.paragraph}>
            <Paragraph>{formatMessage({ id: 'contact.paragraph' })}</Paragraph>
          </div>
        </header>
        <div className={style.grid}>
          {Object.values(CHANEL).map((item) => (
            <div className={style.item}>
              <header>{switchIcon(item)}</header>
              <div className={style.content}>
                <span>
                  {formatMessage({
                    id: `contact.chanels.${item}.label`,
                  })}
                </span>
                <a {...LINKS[item]}>
                  {formatMessage({
                    id: `contact.chanels.${item}.link`,
                  })}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Contact };
