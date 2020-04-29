import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconApollo = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.apollo' })}</title>
      <path d="M19.433 9.069h-3.284l-4.733 12.283h2.965l0.774-2.081h4.472l-0.81-2.302h-2.95l1.915-5.285 3.418 9.669h2.965zM29.57 25.080c-0.227 0-0.427 0.112-0.55 0.283l-0.001 0.002-0.907 0.991c-1.301 1.304-2.846 2.363-4.562 3.103l-0.095 0.036c-1.8 0.764-3.723 1.15-5.701 1.15-0.009 0-0.020 0-0.030 0-2.048 0-3.997-0.423-5.765-1.187l0.094 0.036c-1.81-0.776-3.355-1.835-4.656-3.139l-0-0c-1.304-1.301-2.363-2.846-3.103-4.562l-0.036-0.095c-0.764-1.8-1.157-3.723-1.157-5.7s0.388-3.896 1.15-5.701c0.776-1.81 1.835-3.356 3.14-4.656l0-0c1.301-1.304 2.846-2.363 4.561-3.104l0.095-0.036c1.674-0.727 3.623-1.151 5.672-1.151 0.010 0 0.021 0 0.031 0h-0.002c0.009-0 0.019-0 0.029-0 2.048 0 3.998 0.423 5.766 1.187l-0.094-0.036c1.27 0.538 2.446 1.25 3.512 2.109-0.056 0.159-0.088 0.343-0.088 0.534v0c0 0.913 0.74 1.653 1.652 1.653s1.653-0.74 1.653-1.653-0.74-1.652-1.653-1.652c-0.001 0-0.001 0-0.002 0-0.23 0-0.449 0.047-0.648 0.133l0.011-0.004c-2.727-2.254-6.26-3.622-10.111-3.622-0.007 0-0.013 0-0.020 0h0.001c-8.836 0-16 7.163-16 16s7.163 16 16 16c4.943 0 9.36-2.243 12.3-5.765 0.122-0.122 0.198-0.291 0.198-0.477v0c-0-0.375-0.303-0.677-0.677-0.677z"></path>
    </Svg>
  );
};

IconApollo.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 15,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconApollo.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconApollo };
