import React from 'react';
import { useIntl } from 'react-intl';

import style from './Home.module.css';
import { ROLE } from '../../constants/elementAttr';
import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import imgDesktop from '../../img/banner-home-desktop.jpeg';
import imgMobile from '../../img/banner-home-mobile.jpeg';
import { Banner } from '../../components/Banner/Banner';
import { BANNER_STATUS } from '../../constants/banner';

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
        <div className={style.list}>
          <article className={style.card}>
            <header>
              <span>icon analyze</span>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.analyze.title' })}
              </Title>
            </header>
            <Paragraph>
              {formatMessage({ id: 'home.grid.analyze.paragraph' })}
            </Paragraph>
          </article>

          <article className={style.card}>
            <header>
              <span>icon architect</span>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.architect.title' })}
              </Title>
            </header>
            <Paragraph>
              {formatMessage({ id: 'home.grid.architect.paragraph' })}
            </Paragraph>
          </article>

          <article className={style.card}>
            <header>
              <span>icon develolopment</span>
              <Title level={3}>
                {formatMessage({ id: 'home.grid.development.title' })}
              </Title>
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
