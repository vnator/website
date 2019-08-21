import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconServerless = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.serverless' })}</title>
      <path
        fill="#f05952"
        d="M9.33 20.792h-3.656v3.42h2.523l1.133-3.42z"></path>
      <path
        fill="#f05952"
        d="M11.483 14.29h-5.809v3.42h4.676l1.133-3.42z"></path>
      <path
        fill="#f05952"
        d="M13.635 7.788h-7.961v3.42h6.829l1.132-3.42z"></path>
      <path
        fill="#f05952"
        d="M17.238 7.788l-1.133 3.42h10.22v-3.42h-9.087z"></path>
      <path
        fill="#f05952"
        d="M13.953 17.71h12.373v-3.42h-11.241l-1.132 3.42z"></path>
      <path
        fill="#f05952"
        d="M11.8 24.212h14.526v-3.42h-13.393l-1.133 3.42z"></path>
    </Svg>
  );
};

IconServerless.defaultProps = {
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

IconServerless.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconServerless };
