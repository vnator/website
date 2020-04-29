import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { ROLE } from '../../constants/elementAttr';
import { routes } from '../../config/routes';
import { Banner } from '../../components/Banner/Banner';
import {
  IconBible,
  IconScroll,
  IconTower,
  IconSword,
} from '../../components/Icon';

import imgDesktop from '../../img/banner-about-desktop.jpg';
import imgMobile from '../../img/banner-about-desktop.jpg';

import style from './About.module.css';

let About = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.About}>
      <Banner
        title={formatMessage({ id: 'about.title' })}
        img={{ desktop: imgDesktop, mobile: imgMobile }}
        white
      />

      <div className={style.container}>
        <article className={style.main}>
          <header>
            <Title level={3}>
              {formatMessage({ id: 'about.profile.title' })}
            </Title>
          </header>
          <div>
            <Paragraph>
              {formatMessage({ id: 'about.profile.paragraph.intro' })}
            </Paragraph>
            <Paragraph>
              {formatMessage({ id: 'about.profile.paragraph.main' })}
            </Paragraph>
          </div>
        </article>

        <article className={style.main}>
          <header className={style.header}>
            <Title level={3}>
              {formatMessage({ id: 'about.focus.title' })}
            </Title>
          </header>
          <div>
            <Paragraph>
              {formatMessage({ id: 'about.focus.paragraph.intro' })}
            </Paragraph>
            <Paragraph>
              {formatMessage(
                {
                  id: 'about.focus.paragraph.main',
                },
                {
                  link: (str) => (
                    <Link
                      role={ROLE.MENU_ITEM}
                      rel={formatMessage({ id: 'sidebar.tech.label' })}
                      to={routes.tech}>
                      {str}
                    </Link>
                  ),
                },
              )}
            </Paragraph>
          </div>
        </article>

        <div className={style.values}>
          <header>
            <Title>{formatMessage({ id: 'about.values.title' })}</Title>
            <Paragraph>
              {formatMessage({ id: 'about.values.paragraph' })}
            </Paragraph>
          </header>

          <article className={style.pillar}>
            <header>
              <IconSword className={style.icon} />

              <Title level={3}>
                {formatMessage({ id: 'about.values.quest.title' })}
              </Title>
            </header>
            <div>
              <Paragraph>
                {formatMessage({ id: 'about.values.quest.paragraph' })}
              </Paragraph>
            </div>
          </article>

          <article className={style.pillar}>
            <header>
              <IconTower className={style.icon} />
              <Title level={3}>
                {formatMessage({ id: 'about.values.onus.title' })}
              </Title>
            </header>
            <div>
              <Paragraph>
                {formatMessage({ id: 'about.values.onus.paragraph' })}
              </Paragraph>
            </div>
          </article>

          <article className={style.pillar}>
            <header>
              <IconScroll className={style.icon} />
              <Title level={3}>
                {formatMessage({ id: 'about.values.experience.title' })}
              </Title>
            </header>
            <div>
              <Paragraph>
                {formatMessage(
                  { id: 'about.values.experience.paragraph' },
                  {
                    quote: (str) => <span className={style.quote}>{str}</span>,
                  },
                )}
              </Paragraph>
            </div>
          </article>

          <article className={style.pillar}>
            <header>
              <IconBible className={style.icon} />
              <Title level={3}>
                {formatMessage({ id: 'about.values.faith.title' })}
              </Title>
            </header>
            <div>
              <Paragraph>
                {formatMessage({ id: 'about.values.faith.paragraph' })}
              </Paragraph>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export { About };
