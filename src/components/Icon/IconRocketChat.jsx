import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconRocketChat = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.chanel.rocketChat' })}</title>
      <path
        fill="#c1272d"
        d="M37.393 15.972c0-1.878-0.562-3.678-1.67-5.351-0.995-1.502-2.389-2.832-4.143-3.953-3.387-2.163-7.838-3.355-12.532-3.355-1.568 0-3.114 0.132-4.613 0.395-0.93-0.871-2.019-1.654-3.171-2.273-6.156-2.984-11.261-0.070-11.261-0.070s4.746 3.899 3.974 7.316c-2.123 2.107-3.274 4.647-3.274 7.291 0 0.008 0 0.017 0 0.025s-0 0.017-0 0.025c0 2.644 1.151 5.184 3.274 7.291 0.772 3.418-3.974 7.317-3.974 7.317s5.105 2.913 11.261-0.070c1.152-0.619 2.241-1.403 3.171-2.273 1.5 0.262 3.045 0.395 4.613 0.395 4.695 0 9.146-1.191 12.532-3.354 1.754-1.121 3.148-2.45 4.143-3.953 1.108-1.674 1.67-3.474 1.67-5.351 0-0.009-0-0.017-0-0.025l0-0.026z"></path>
      <path
        fill="#fff"
        d="M19.048 5.967c8.693 0 15.741 4.502 15.741 10.055s-7.048 10.055-15.741 10.055c-1.936 0-3.79-0.224-5.502-0.632-1.741 2.094-5.57 5.005-9.29 4.064 1.21-1.3 3.003-3.495 2.619-7.113-2.23-1.735-3.568-3.955-3.568-6.374-0-5.554 7.047-10.055 15.741-10.055z"></path>
      <path
        fill="#c1272d"
        d="M19.048 18.437c1.155 0 2.091-0.936 2.091-2.091s-0.936-2.091-2.091-2.091c-1.155 0-2.091 0.936-2.091 2.091s0.936 2.091 2.091 2.091zM26.319 18.437c1.155 0 2.091-0.936 2.091-2.091s-0.936-2.091-2.091-2.091-2.091 0.936-2.091 2.091c0 1.155 0.936 2.091 2.091 2.091zM11.778 18.436c1.155 0 2.091-0.936 2.091-2.091s-0.936-2.091-2.091-2.091c-1.155 0-2.091 0.936-2.091 2.091s0.936 2.091 2.091 2.091z"></path>
      <path
        fill="#ccc"
        d="M19.048 24.754c-1.936 0-3.79-0.194-5.502-0.548-1.537 1.603-4.703 3.757-7.983 3.678-0.432 0.655-0.902 1.191-1.307 1.625 3.72 0.941 7.549-1.97 9.29-4.064 1.713 0.408 3.567 0.632 5.502 0.632 8.624 0 15.627-4.431 15.738-9.922-0.112 4.76-7.115 8.599-15.738 8.599z"></path>
    </Svg>
  );
};

IconRocketChat.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 37,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconRocketChat.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconRocketChat };
