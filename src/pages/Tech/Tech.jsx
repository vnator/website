import React from 'react';
import { useIntl } from 'react-intl';

import style from './Tech.module.css';
import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Tech = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.Tech}>
      <main className={style.main}>
        <Title>{formatMessage({ id: 'tech.title' })}</Title>
        <Paragraph>{formatMessage({ id: 'tech.paragraph' })}</Paragraph>
      </main>
      <div className={style.backend}>
        <Title level={3}>{formatMessage({ id: 'tech.backend.title' })}</Title>
        <Paragraph>{formatMessage({ id: 'tech.backend.paragraph' })}</Paragraph>

        <article className={style.article}>
          <Title level={4}>
            {formatMessage({ id: 'tech.backend.architecturalPatterns.title' })}
          </Title>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.architecturalPatterns.paragraph',
            })}
          </Paragraph>
        </article>

        <article className={style.article}>
          <Title level={4}>
            {formatMessage({ id: 'tech.backend.languages.title' })}
          </Title>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.intro',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.java',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.python',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.haskell',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.node',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.tcl',
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.languages.paragraph.rust',
            })}
          </Paragraph>
        </article>

        <article className={style.article}>
          <Title level={4}>
            {formatMessage({ id: 'tech.backend.persistence.title' })}
          </Title>
          <Paragraph>
            {formatMessage({
              id: 'tech.backend.persistence.paragraph.intro',
            })}
          </Paragraph>

          <Paragraph>
            {formatMessage({
              id: 'tech.backend.persistence.paragraph.sql',
            })}
          </Paragraph>

          <Paragraph>
            {formatMessage({
              id: 'tech.backend.persistence.paragraph.noSql',
            })}
          </Paragraph>

          <Paragraph>
            {formatMessage({
              id: 'tech.backend.persistence.paragraph.reddis',
            })}
          </Paragraph>

          <Paragraph>
            {formatMessage({
              id: 'tech.backend.persistence.paragraph.orm',
            })}
          </Paragraph>
        </article>
      </div>
      <div className={style.frontend}>
        <Title level={3}>{formatMessage({ id: 'tech.frontend.title' })}</Title>
        <Paragraph>
          {formatMessage({ id: 'tech.frontend.paragraph' })}
        </Paragraph>

        <article className={style.article}>
          <Title level={4}>
            {formatMessage({ id: 'tech.frontend.web.title' })}
          </Title>
          <Paragraph>
            {formatMessage({ id: 'tech.frontend.web.paragraph.languages' })}
          </Paragraph>
          <Paragraph>
            {formatMessage({ id: 'tech.frontend.web.paragraph.libraries' })}
          </Paragraph>
        </article>

        <div className={style.grid}>
          <Title level={4}>
            {formatMessage({ id: 'tech.frontend.mobile.title' })}
          </Title>
          <Paragraph>
            {formatMessage({ id: 'tech.frontend.mobile.paragraph' })}
          </Paragraph>

          <div className={style.card}>
            <Title level={5}>
              {formatMessage({ id: 'tech.frontend.mobile.reactNative.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.reactNative.paragraph',
              })}
            </Paragraph>
          </div>

          <div className={style.card}>
            <Title level={5}>
              {formatMessage({ id: 'tech.frontend.mobile.flutter.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.flutter.paragraph',
              })}
            </Paragraph>
          </div>

          <div className={style.card}>
            <Title level={5}>
              {formatMessage({ id: 'tech.frontend.mobile.androidSdk.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.androidSdk.paragraph',
              })}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tech };
