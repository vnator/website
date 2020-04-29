import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconWebpack = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.webpack' })}</title>
      <path
        fill="#8dd6f9"
        d="M28.021 24.16l-11.553 6.506v-5.068l7.198-3.942 4.355 2.503zM28.811 23.448v-13.607l-4.228 2.429v8.746l4.228 2.432zM3.901 24.16l11.553 6.506v-5.068l-7.198-3.942-4.355 2.503zM3.111 23.448v-13.607l4.228 2.429v8.746l-4.228 2.432zM3.605 8.96l11.849-6.674v4.9l-7.649 4.19-4.2-2.415zM28.317 8.96l-11.849-6.674v4.9l7.649 4.19 4.2-2.415zM15.454 24.446l-7.102-3.887v-7.703l7.101 4.083v7.508zM16.468 24.446l7.101-3.887v-7.703l-7.101 4.083v7.508zM8.833 11.965l7.129-3.904 7.129 3.904-7.129 4.099-7.129-4.099z"></path>
    </Svg>
  );
};

IconWebpack.defaultProps = {
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

IconWebpack.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconWebpack };
