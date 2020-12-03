import React from 'react';
import { useIntl } from 'react-intl';

import {
  IconSketch,
  IconCarpenter,
  IconTelescope,
} from '../../components/Icon';

import imgDesktop from '../../img/banner-home-desktop.jpg';
import imgMobile from '../../img/banner-home-mobile.jpeg';

import { ROLE } from '../../constants/elementAttr';
import { Banner } from '../../components/Banner/Banner';
import { BANNER_STATUS } from '../../constants/banner';

import style from './Home.module.css';
import { Card } from '../../components/Card/Card';

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={style.Home}>
      <Banner
        title={formatMessage({ id: 'home.banner.title' }, { carambolas: 'Quadradas never die'})}
        content={formatMessage({ id: 'home.banner.paragraph' })}
        img={{ desktop: imgDesktop, mobile: imgMobile }}
        status={BANNER_STATUS.END}
        white
      />
      <main role={ROLE.MAIN} className={style.grid}>
        <Card
          title={formatMessage(
            { id: 'home.grid.analyze.title' },
            {
              break: (str) => <span className={style.break}>{str}</span>,
            },
          )}
          content={formatMessage(
            { id: 'home.grid.analyze.paragraph' },
            {
              break: (str) => <span className={style.break}>{str}</span>,
            },
          )}
          icon={<IconTelescope className={style.icon} />}
          className={style._first}
        />

        <Card
          title={formatMessage(
            { id: 'home.grid.architect.title' },
            {
              break: (str) => <span className={style.break}>{str}</span>,
            },
          )}
          content={formatMessage({ id: 'home.grid.architect.paragraph' })}
          icon={<IconSketch className={style.icon} />}
          className={style._second}
        />

        <Card
          title={formatMessage(
            { id: 'home.grid.development.title' },
            {
              break: (str) => <span className={style.break}>{str}</span>,
            },
          )}
          content={formatMessage({ id: 'home.grid.development.paragraph' })}
          icon={<IconCarpenter className={style.icon} />}
          className={style._third}
        />
      </main>
    </div>
  );
};

export { Home };
