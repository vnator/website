import React from 'react';
import { useIntl } from 'react-intl';

import { Banner } from '../../components/Banner/Banner';
import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import imgDesktop from '../../img/banner-tech-desktop.jpeg';
import imgMobile from '../../img/banner-tech-mobile.jpeg';
import style from './Tech.module.css';
import {
  IconJwt,
  IconAws,
  IconVim,
  IconArch,
  IconDuckDuckGo,
  IconGit,
  IconFirefox,
  IconShopify,
  IconVSCode,
  IconCircleCi,
  IconKafka,
  IconServerless,
  IconApiGateway,
  IconCloudFront,
  IconCognito,
  IconEC2,
  IconRoute53,
  IconS3,
  IconAmplify,
  IconCloudFormation,
  IconLambda,
  IconDocker,
  IconGraphQl,
  IconKubernetes,
  IconNodeJs,
  IconTcl,
  IconCpp,
  IconHaskell,
  IconJava,
  IconPython,
  IconRust,
  IconMySql,
  IconPostgres,
  IconSqlServer,
  IconAurora,
  IconMongo,
  IconRedis,
  IconDynamo,
  IconDjango,
  IconHibernate,
  IconSequelize,
} from '../../components/Icon';

const Tech = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.Tech}>
      <Banner
        white
        title={formatMessage({ id: 'tech.title' })}
        img={{ desktop: imgDesktop, mobile: imgMobile }}
      />
      <div className={style.container}>
        <main className={style.main}>
          <Title>{formatMessage({ id: 'tech.subtitle' })}</Title>
          <Paragraph>{formatMessage({ id: 'tech.paragraph' })}</Paragraph>

          <ul className={`${style.list} ${style._center}`}>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://jwt.io/"
                className={`__reset ${style.link}`}>
                <IconJwt className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://aws.amazon.com/"
                className={`__reset ${style.link}`}>
                <IconAws className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://www.vim.org/"
                className={`__reset ${style.link}`}>
                <IconVim className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://www.archlinux.org/"
                className={`__reset ${style.link}`}>
                <IconArch className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://duckduckgo.com/?t=hp"
                className={`__reset ${style.link}`}>
                <IconDuckDuckGo className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://git-scm.com/"
                className={`__reset ${style.link}`}>
                <IconGit className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://www.mozilla.org/pt-BR/firefox/new/?redirect_source=firefox-com"
                className={`__reset ${style.link}`}>
                <IconFirefox className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://www.shopify.com/"
                className={`__reset ${style.link}`}>
                <IconShopify className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://code.visualstudio.com/"
                className={`__reset ${style.link}`}>
                <IconVSCode className={style.icon} />
              </a>
            </li>
            <li className={style.item}>
              <a
                target="_blank"
                href="https://circleci.com/"
                className={`__reset ${style.link}`}>
                <IconCircleCi className={style.icon} />
              </a>
            </li>
          </ul>
        </main>
        <div className={style.backend}>
          <header>
            <Title level={3}>
              {formatMessage({ id: 'tech.backend.title' })}
            </Title>
            <Paragraph>
              {formatMessage({ id: 'tech.backend.paragraph' })}
            </Paragraph>
          </header>

          <article className={style.article}>
            <Title level={4}>
              {formatMessage({
                id: 'tech.backend.architecturalPatterns.title',
              })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.backend.architecturalPatterns.paragraph',
              })}
            </Paragraph>
            <ul className={`${style.list} ${style._end}`}>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://kafka.apache.org/"
                  className={`__reset ${style.link}`}>
                  <IconKafka className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://serverless.com/"
                  className={`__reset ${style.link}`}>
                  <IconServerless className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/api-gateway/"
                  className={`__reset ${style.link}`}>
                  <IconApiGateway className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/cloudfront/"
                  className={`__reset ${style.link}`}>
                  <IconCloudFront className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/cognito/"
                  className={`__reset ${style.link}`}>
                  <IconCognito className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/ec2/"
                  className={`__reset ${style.link}`}>
                  <IconEC2 className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/route53/"
                  className={`__reset ${style.link}`}>
                  <IconRoute53 className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/s3/"
                  className={`__reset ${style.link}`}>
                  <IconS3 className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/amplify/"
                  className={`__reset ${style.link}`}>
                  <IconAmplify className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/cloudformation/"
                  className={`__reset ${style.link}`}>
                  <IconCloudFormation className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/lambda/"
                  className={`__reset ${style.link}`}>
                  <IconLambda className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.docker.com/"
                  className={`__reset ${style.link}`}>
                  <IconDocker className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://graphql.org/"
                  className={`__reset ${style.link}`}>
                  <IconGraphQl className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://kubernetes.io/"
                  className={`__reset ${style.link}`}>
                  <IconKubernetes className={style.icon} />
                </a>
              </li>
            </ul>
          </article>

          <article className={style.article}>
            <Title level={4}>
              {formatMessage({ id: 'tech.backend.languages.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.backend.languages.paragraph.intro',
              })}
              {formatMessage({
                id: 'tech.backend.languages.paragraph.java',
              })}
              {formatMessage({
                id: 'tech.backend.languages.paragraph.python',
              })}
              {formatMessage({
                id: 'tech.backend.languages.paragraph.haskell',
              })}
              {formatMessage({
                id: 'tech.backend.languages.paragraph.node',
              })}
              {formatMessage({
                id: 'tech.backend.languages.paragraph.tcl',
              })}
            </Paragraph>
            <Paragraph>
              {formatMessage({
                id: 'tech.backend.languages.paragraph.rust',
              })}
            </Paragraph>

            <ul className={`${style.list} ${style._end}`}>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="http://www.cplusplus.com/"
                  className={`__reset ${style.link}`}>
                  <IconCpp className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.haskell.org/"
                  className={`__reset ${style.link}`}>
                  <IconHaskell className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://nodejs.org"
                  className={`__reset ${style.link}`}>
                  <IconNodeJs className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.tcl.tk/"
                  className={`__reset ${style.link}`}>
                  <IconTcl className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.python.org/"
                  className={`__reset ${style.link}`}>
                  <IconPython className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.java.com"
                  className={`__reset ${style.link}`}>
                  <IconJava className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.rust-lang.org/"
                  className={`__reset ${style.link}`}>
                  <IconRust className={style.icon} />
                </a>
              </li>
            </ul>
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
              {formatMessage(
                {
                  id: 'tech.backend.persistence.paragraph.noSql',
                },
                {
                  quote: str => <quote className={style.quote}>{str}</quote>,
                },
              )}
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

            <ul className={`${style.list} ${style._end}`}>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.mysql.com/"
                  className={`__reset ${style.link}`}>
                  <IconMySql className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.microsoft.com/en-us/sql-server"
                  className={`__reset ${style.link}`}>
                  <IconSqlServer className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.postgresql.org/"
                  className={`__reset ${style.link}`}>
                  <IconPostgres className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/rds/aurora/"
                  className={`__reset ${style.link}`}>
                  <IconAurora className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://redis.io/"
                  className={`__reset ${style.link}`}>
                  <IconRedis className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://aws.amazon.com/pt/dynamodb/"
                  className={`__reset ${style.link}`}>
                  <IconDynamo className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.djangoproject.com/"
                  className={`__reset ${style.link}`}>
                  <IconDjango className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://hibernate.org/"
                  className={`__reset ${style.link}`}>
                  <IconHibernate className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://sequelize.org/"
                  className={`__reset ${style.link}`}>
                  <IconSequelize className={style.icon} />
                </a>
              </li>
              <li className={style.item}>
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  className={`__reset ${style.link}`}>
                  <IconMongo className={style.icon} />
                </a>
              </li>
            </ul>
          </article>
        </div>
        <div className={style.frontend}>
          <header>
            <Title level={3}>
              {formatMessage({ id: 'tech.frontend.title' })}
            </Title>
            <Paragraph>
              {formatMessage({ id: 'tech.frontend.paragraph' })}
            </Paragraph>
          </header>

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

          <article className={style.article}>
            <Title level={4}>
              {formatMessage({ id: 'tech.frontend.mobile.title' })}
            </Title>
            <Paragraph>
              {formatMessage({ id: 'tech.frontend.mobile.paragraph' })}
            </Paragraph>
          </article>

          <article className={style.article}>
            <Title level={5}>
              {formatMessage({
                id: 'tech.frontend.mobile.reactNative.title',
              })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.reactNative.paragraph',
              })}
            </Paragraph>
          </article>

          <article className={style.article}>
            <Title level={5}>
              {formatMessage({ id: 'tech.frontend.mobile.flutter.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.flutter.paragraph',
              })}
            </Paragraph>
          </article>

          <article className={style.article}>
            <Title level={5}>
              {formatMessage({ id: 'tech.frontend.mobile.androidSdk.title' })}
            </Title>
            <Paragraph>
              {formatMessage({
                id: 'tech.frontend.mobile.androidSdk.paragraph',
              })}
            </Paragraph>
          </article>
        </div>
      </div>
    </div>
  );
};

export { Tech };
