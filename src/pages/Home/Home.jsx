import React from 'react';
import { useIntl } from 'react-intl';

import style from './Home.module.css';
import { ROLE } from '../../constants/elementAttr';
import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.Home}>
      <div className={style.banner} role={ROLE.BANNER}>
        {/*
          image element
          <img
            className={style.image}
            srcSet={`${bannerImage}, ${bannerImageMobile} 768w`}
            alt={formatMessage({ id: 'home.banner.img' })}
            >
        */}
        <div className={style.content}>
          <Title>{formatMessage({ id: 'home.banner.title' })}</Title>
          <Paragraph>
            {formatMessage({ id: 'home.banner.paragraph' })}
          </Paragraph>
        </div>
      </div>
      <main role={ROLE.MAIN} className={style.grid}>
        <header className={style.header}>
          <Title>{formatMessage({ id: 'home.grid.title' })}</Title>
        </header>

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
