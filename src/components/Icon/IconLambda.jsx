import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconLambda = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.awsLambda' })}</title>
      <path d="M25.813 26.667h-5.257c-0.169-0-0.314-0.099-0.383-0.241l-0.001-0.003-7.433-15.543h-3.145c-0.236 0-0.427-0.191-0.427-0.427v0-4.693c0-0.236 0.191-0.427 0.427-0.427v0h6.571c0.169 0 0.314 0.099 0.383 0.241l0.001 0.003 7.398 15.543h1.865c0.236 0 0.427 0.191 0.427 0.427v0 4.693c0 0.236-0.191 0.427-0.427 0.427v0zM20.826 25.813h4.561v-3.84h-1.707c-0.169-0-0.314-0.099-0.383-0.241l-0.001-0.003-7.398-15.543h-5.871v3.84h2.987c0.168 0.001 0.314 0.099 0.383 0.241l0.001 0.003z"></path>
      <path d="M11.725 26.667h-5.547c-0 0-0.001 0-0.001 0-0.152 0-0.285-0.079-0.361-0.199l-0.001-0.002c-0.043-0.065-0.068-0.146-0.068-0.232 0-0.071 0.017-0.138 0.048-0.197l-0.001 0.002 5.803-12.122c0.070-0.145 0.216-0.243 0.384-0.243h0c0 0 0.001 0 0.001 0 0.167 0 0.312 0.096 0.382 0.236l0.001 0.002 2.778 5.713c0.027 0.054 0.042 0.118 0.042 0.186s-0.016 0.131-0.044 0.188l0.001-0.003-3.029 6.4c-0.063 0.156-0.213 0.265-0.388 0.269h-0zM6.861 25.813h4.595l2.829-5.973-2.3-4.757z"></path>
    </Svg>
  );
};

IconLambda.defaultProps = {
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

IconLambda.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconLambda };
