import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconFlutter = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.mobile.flutter' })}</title>
      <path
        fill="#02569b"
        d="M19.085 0l-16.019 16 4.933 4.933 20.912-20.917h-9.809l-0.017-0.016zM19.104 14.763l-8.628 8.609 8.627 8.627h9.831l-8.613-8.624 8.613-8.613h-9.828z"></path>
    </Svg>
  );
};

IconFlutter.defaultProps = {
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

IconFlutter.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconFlutter };
