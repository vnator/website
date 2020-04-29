import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconKotlin = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.mobile.kotlin' })}</title>
      <path
        fill="#0095d5"
        d="M1.733 32l15.067-15.333 15.2 15.333zM0 0h16l-16 16.667zM17.867 0l-17.867 18.667v13.333l32-32z"></path>
    </Svg>
  );
};

IconKotlin.defaultProps = {
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

IconKotlin.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconKotlin };
