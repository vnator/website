import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconEmail = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.chanel.email' })}</title>
      <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
    </Svg>
  );
};

IconEmail.defaultProps = {
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

IconEmail.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconEmail };
