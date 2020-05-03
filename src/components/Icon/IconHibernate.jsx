import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconHibernate = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.persistence.hibernate' })}</title>
      <path
        fill="#59666c"
        d="M6.768 0l6.155 10.66-6.158 10.675-6.151-10.675z"></path>
      <path fill="#bcae79" d="M19.080 0.001h-12.309l6.155 10.66h12.312z"></path>
      <path
        fill="#59666c"
        d="M25.232 32l-6.155-10.66 6.158-10.675 6.151 10.675z"></path>
      <path fill="#bcae79" d="M12.92 31.999h12.31l-6.15-10.66h-12.319z"></path>
    </Svg>
  );
};

IconHibernate.defaultProps = {
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

IconHibernate.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconHibernate };
