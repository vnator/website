import React from 'react';
import { Link } from 'react-router-dom';

import style from './About.module.css';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { routes } from '../../config/routes';

let About = ({ intl: { formatMessage } }) => (
  <div className={style.About}>
    <Title>{formatMessage({ id: 'about.title' })}</Title>
    <article className={style.content}>
      <header className={style.header}>
        <SubTitle>{formatMessage({ id: 'about.profile.title' })}</SubTitle>
      </header>
      <div>
        <Paragraph>
          {formatMessage({ id: 'about.profile.paragraph_1' })}
        </Paragraph>
        <Paragraph>
          {formatMessage({ id: 'about.profile.paragraph_2' })}
        </Paragraph>
      </div>
    </article>

    <article className={style.content}>
      <header className={style.header}>
        <SubTitle>{formatMessage({ id: 'about.focus.title' })}</SubTitle>
      </header>
      <div>
        <Paragraph>
          {formatMessage({ id: 'about.focus.paragraph_1' })}
        </Paragraph>
        <Paragraph>
          {formatMessage({ id: 'about.focus.paragraph_2' })}
        </Paragraph>
      </div>
    </article>

    <div className="values">
      <Title>{formatMessage({ id: 'about.values.title' })}</Title>
      <Paragraph>{formatMessage({ id: 'about.values.paragraph' })}</Paragraph>
      <article className={style.content}>
        <header className={style.header}>
          <SubTitle>
            {formatMessage({ id: 'about.values.quest.title' })}
          </SubTitle>
        </header>
        <div>
          <Paragraph>
            {formatMessage({ id: 'about.values.quest.paragraph' })}
          </Paragraph>
        </div>
      </article>

      <article className={style.content}>
        <header className={style.header}>
          <SubTitle>
            {formatMessage({ id: 'about.values.onus.title' })}
          </SubTitle>
        </header>
        <div>
          <Paragraph>
            {formatMessage({ id: 'about.values.onus.paragraph' })}
          </Paragraph>
        </div>
      </article>

      <article className={style.content}>
        <header className={style.header}>
          <SubTitle>
            {formatMessage({ id: 'about.values.experience.title' })}
          </SubTitle>
        </header>
        <div>
          <Paragraph>
            {formatMessage({ id: 'about.values.experience.paragraph' })}
          </Paragraph>
        </div>
      </article>

      <article className={style.content}>
        <header className={style.header}>
          <SubTitle>
            {formatMessage({ id: 'about.values.faith.title' })}
          </SubTitle>
        </header>
        <div>
          <Paragraph>
            {formatMessage({ id: 'about.values.faith.paragraph' })}
          </Paragraph>
        </div>
      </article>
    </div>
  </div>
);

About.propTypes = {
  intl: intlShape.isRequired,
};

About = injectIntl(About);

export { About };
