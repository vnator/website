import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconMedium = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icons.chanel.medium' })}</title>
      <path d="M29.579 26.501l2.421 2.337v0.078h-12.28v-0.078l2.465-2.337c0.263-0.216 0.389-0.56 0.329-0.898v-14.943c0-0.632 0-1.485 0.11-2.215l-8.284 20.769h-0.098l-8.578-19.108-0.362-0.831v12.529c-0.021 0.161-0.033 0.346-0.033 0.535 0 0.696 0.162 1.354 0.45 1.939l-0.011-0.026 3.451 4.586v0.078h-9.159v-0.078l3.451-4.597c0.365-0.756 0.5-1.602 0.405-2.437v-13.847c0.056-0.682-0.147-1.36-0.57-1.894l-2.442-3.201v-0.078h8.764l7.34 16.184 6.463-16.184h8.578v0.078l-2.41 2.714c-0.289 0.213-0.433 0.574-0.372 0.93v19.097c-0.010 0.049-0.015 0.105-0.015 0.163 0 0.304 0.152 0.572 0.385 0.733l0.003 0.002z"></path>
    </Svg>
  );
};

IconMedium.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 23,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconMedium.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconMedium };
