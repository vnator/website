import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconDart = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.mobile.dart' })}</title>
      <path
        fill="#00c4b3"
        d="M8.791 8.712l-2.069-2.070 0.008 14.951 0.025 0.698c0.010 0.33 0.072 0.7 0.173 1.085l16.387 5.78 4.1-1.815 0.003-0.006-18.628-18.623z"></path>
      <path
        fill="#22d3c5"
        d="M6.928 23.377h0.002c-0.002-0.006-0.004-0.013-0.007-0.020 0.003 0.008 0.003 0.015 0.005 0.020zM27.411 27.341l-4.1 1.815-16.385-5.78c0.313 1.202 1.006 2.553 1.751 3.29l5.345 5.319 11.894 0.015 1.49-4.659z"></path>
      <path
        fill="#0075c9"
        d="M6.778 6.643l-6.372 9.623c-0.529 0.565-0.265 1.731 0.587 2.59l3.678 3.708 2.312 0.815c-0.1-0.384-0.163-0.75-0.173-1.085l-0.025-0.698-0.008-14.951z"></path>
      <path
        fill="#0075c9"
        d="M23.45 6.835c-0.385-0.098-0.754-0.159-1.087-0.168l-0.739-0.027-14.902 0.003 20.696 20.693 1.818-4.1-5.785-16.4z"></path>
      <path
        fill="#00a8e1"
        d="M23.431 6.832c0.006 0.003 0.014 0.004 0.019 0.005v-0.002c-0.006-0.002-0.012-0.002-0.019-0.004zM26.738 8.591c-0.753-0.758-2.085-1.45-3.288-1.754l5.785 16.398-1.82 4.1 4.441-1.419 0.010-12.176-5.128-5.15z"></path>
      <path
        fill="#00c4b3"
        d="M22.639 4.537l-3.7-3.68c-0.863-0.849-2.029-1.113-2.589-0.586l-9.622 6.37 14.902-0.003 0.739 0.027c0.332 0.010 0.702 0.071 1.087 0.168l-0.816-2.297z"></path>
    </Svg>
  );
};

IconDart.defaultProps = {
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

IconDart.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconDart };
