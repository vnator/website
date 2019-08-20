import React from 'react';
import { useIntl } from 'react-intl';

import {
  IconSketch,
  IconCarpenter,
  IconTelescope,
} from '../../components/Icon';

import imgDesktop from '../../img/banner-home-desktop.jpeg';
import imgMobile from '../../img/banner-home-mobile.jpeg';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { ROLE } from '../../constants/elementAttr';
import { Title } from '../../components/Title/Title';
import { Banner } from '../../components/Banner/Banner';
import { BANNER_STATUS } from '../../constants/banner';

import style from './Home.module.css';

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.Home}>
      <Banner
        title={formatMessage({ id: 'home.banner.title' })}
        content={formatMessage({ id: 'home.banner.paragraph' })}
        img={{ desktop: imgDesktop, mobile: imgMobile }}
        status={BANNER_STATUS.END}
      />
      <main role={ROLE.MAIN} className={style.grid}>
        <header className={style.header}>
          <Title>{formatMessage({ id: 'home.grid.title' })}</Title>
        </header>
        <div className={style.list}>
          <article className={style.card}>
            <header>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.analyze.title' })}
              </Title>
              <IconTelescope className={style.icon} />
            </header>
            <Paragraph>
              {formatMessage({ id: 'home.grid.analyze.paragraph' })}
            </Paragraph>
          </article>

          <article className={style.card}>
            <header>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.architect.title' })}
              </Title>
              <IconSketch className={style.icon} />
            </header>
            <Paragraph>
              {formatMessage({ id: 'home.grid.architect.paragraph' })}
            </Paragraph>
          </article>

          <article className={style.card}>
            <header>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.development.title' })}
              </Title>
              <IconCarpenter className={style.icon} />
            </header>
            <Paragraph>
              {formatMessage({ id: 'home.grid.development.paragraph' })}
            </Paragraph>
          </article>
        </div>
      </main>
    </div>
  );
};

export { Home };
