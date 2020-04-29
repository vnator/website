import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconSequelize = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.persistence.sequelize' })}</title>
      <path
        fill="#2f406a"
        d="M25.46 10.43v11.070l-9.415 5.58-0.085 0.078v4.142l0.085 0.080 13.25-7.66v-15.44l-0.125-0.030-3.75 2.090 0.020 0.090z"></path>
      <path
        fill="#2f406a"
        d="M6.6 21.6l9.445 5.48v4.3l-13.35-7.69v-15.38l0.138-0.020 3.728 2.168 0.040 0.125v11.018z"></path>
      <path
        fill="#2f406a"
        d="M6.6 10.58l-3.905-2.27 13.32-7.69 13.29 7.66-3.845 2.15-9.445-5.39-9.415 5.54zM7.515 21v-4.525l0.103 0.060 3.662 2.13v4.383l-3.765-2.047zM20.817 23.15v-4.4l0.025-0.012 3.677-2.152v4.375l-3.703 2.19zM16.212 25.865l-0.102-0.105v-4.26l0.128-0.045 3.677-2.142v4.363l-3.7 2.19z"></path>
      <path
        fill="#2f406a"
        d="M12.45 23.808v-4.515l0.102 0.058 3.628 2.113 0.030 4.402-3.76-2.058zM15.822 5.735l-3.703 2.19 3.763 2.19 3.7-2.16-3.76-2.22zM7.515 15.090v-4.453h0.103l3.633 2.113 0.030 0.082v4.315l-3.765-2.058z"></path>
      <path
        fill="#2f406a"
        d="M11.215 8.45l-3.7 2.19 3.763 2.19 3.7-2.16-3.762-2.22zM20.817 17.25v-4.325l0.025-0.102 3.567-2.072 0.11 0.025v4.277l-3.703 2.197z"></path>
      <path
        fill="#2f406a"
        d="M20.75 8.553l-3.695 2.197 3.762 2.19 3.7-2.16-3.767-2.228zM16.212 19.962l-0.102-0.105v-4.16l0.102-0.053 0.025-0.102 3.567-2.080 0.11 0.025v4.285l-3.7 2.19z"></path>
      <path
        fill="#2f406a"
        d="M12.45 17.907v-4.453h0.102l3.628 2.113 0.030 0.082v4.313l-3.76-2.055z"></path>
      <path
        fill="#2f406a"
        d="M16.15 11.265l-3.7 2.19 3.762 2.19 3.7-2.16-3.762-2.22z"></path>
    </Svg>
  );
};

IconSequelize.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 32,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconSequelize.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconSequelize };
