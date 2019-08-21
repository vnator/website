import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconAmplify = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.awsAmplify' })}</title>
      <path d="M17.237 23.842h-11.127c-0.235-0-0.426-0.191-0.426-0.427 0-0.077 0.020-0.149 0.056-0.211l-0.001 0.002 5.453-9.741c0.072-0.127 0.205-0.213 0.358-0.218l0.001-0c0.004-0 0.010-0 0.015-0 0.148 0 0.279 0.076 0.356 0.191l0.001 0.002 1.527 2.347c0.043 0.065 0.068 0.146 0.068 0.232 0 0.071-0.017 0.138-0.048 0.197l0.001-0.002-2.219 4.267h4.749c0 0 0.001 0 0.001 0 0.167 0 0.312 0.096 0.382 0.236l0.001 0.002 1.237 2.56c0.029 0.056 0.045 0.122 0.045 0.191 0 0.088-0.026 0.169-0.072 0.237l0.001-0.002c-0.078 0.085-0.19 0.139-0.315 0.139-0.015 0-0.030-0.001-0.045-0.002l0.002 0zM6.827 22.989h9.728l-0.823-1.707h-5.184c-0.001 0-0.002 0-0.002 0-0.154 0-0.288-0.081-0.363-0.203l-0.001-0.002c-0.036-0.061-0.057-0.135-0.057-0.213s0.021-0.152 0.058-0.215l-0.001 0.002 2.432-4.646-1.020-1.498z"></path>
      <path d="M21.525 23.842h-2.688c-0.001 0-0.002 0-0.004 0-0.159 0-0.297-0.087-0.371-0.216l-0.001-0.002-6.178-11.2c-0.028-0.055-0.045-0.121-0.045-0.19s0.016-0.135 0.046-0.192l-0.001 0.002 1.003-2.231c0.065-0.142 0.201-0.241 0.361-0.252l0.001-0c0.008-0 0.016-0.001 0.025-0.001 0.156 0 0.292 0.083 0.366 0.208l0.001 0.002 7.851 13.453c0.036 0.061 0.057 0.135 0.057 0.213 0 0.235-0.19 0.425-0.424 0.427h-0zM19.089 22.989h1.707l-7.074-12.096-0.589 1.306z"></path>
      <path d="M25.89 23.842h-2.765c-0 0-0.001 0-0.002 0-0.157 0-0.294-0.085-0.368-0.211l-0.001-0.002-8.508-14.831c-0.036-0.061-0.057-0.135-0.057-0.213s0.021-0.152 0.058-0.215l-0.001 0.002c0.075-0.128 0.211-0.212 0.367-0.213h2.624c0.155 0 0.291 0.083 0.366 0.207l0.001 0.002 8.653 14.835c0.036 0.061 0.057 0.135 0.057 0.213 0 0.235-0.19 0.425-0.424 0.427h-0zM23.373 22.989h1.771l-8.154-13.978h-1.63z"></path>
    </Svg>
  );
};

IconAmplify.defaultProps = {
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

IconAmplify.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconAmplify };
