import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconHtml = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.html' })}</title>
      <path
        fill="#e34f26"
        d="M2 0h28l-2.547 28.751-11.484 3.249-11.419-3.251-2.551-28.749zM11.375 13l-0.309-3.624 13.412 0.004 0.307-3.496-17.568-0.004 0.931 10.68h12.168l-0.435 4.568-3.88 1.072-3.94-1.080-0.251-2.813h-3.479l0.44 5.561 7.229 1.933 7.172-1.924 0.992-10.876h-12.789z"></path>
    </Svg>
  );
};

IconHtml.defaultProps = {
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

IconHtml.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconHtml };
