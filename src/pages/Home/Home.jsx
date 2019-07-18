import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Home.module.css';
import { ROLE } from '../../constants/elementAttr';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Paragraph } from '../../components/Paragraph/Paragraph';

let Home = ({ intl: { formatMessage } }) => (
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
        <Paragraph>{formatMessage({ id: 'home.banner.paragraph' })}</Paragraph>
      </div>
    </div>
    <article role={ROLE.MAIN} className={style.grid}>
      <header className={style.header}>
        <Title>{formatMessage({ id: 'home.grid.title' })}</Title>
      </header>

      <div className={style.list}>
        <div className={style.card}>
          <span>icon analyze</span>
          <SubTitle>
            {formatMessage({ id: 'home.grid.analyze.title' })}
          </SubTitle>
          <Paragraph>
            {formatMessage({ id: 'home.grid.analyze.paragraph' })}
          </Paragraph>
        </div>

        <div className={style.card}>
          <span>icon architect</span>
          <SubTitle>
            {formatMessage({ id: 'home.grid.architect.title' })}
          </SubTitle>
          <Paragraph>
            {formatMessage({ id: 'home.grid.architect.paragraph' })}
          </Paragraph>
        </div>

        <div className={style.card}>
          <span>icon develolopment</span>
          <SubTitle>
            {formatMessage({ id: 'home.grid.development.title' })}
          </SubTitle>
          <Paragraph>
            {formatMessage({ id: 'home.grid.development.paragraph' })}
          </Paragraph>
        </div>
      </div>
    </article>
  </div>
);

Home.propTypes = {
  intl: intlShape.isRequired,
};

Home = injectIntl(Home);

export { Home };
