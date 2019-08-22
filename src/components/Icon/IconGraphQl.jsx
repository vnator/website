import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconGraphQl = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.graphQl' })}</title>
      <path
        fill="#e10098"
        d="M18.735 3.668l6.58 3.8c1.088-1.145 2.897-1.191 4.043-0.103 0.197 0.187 0.365 0.401 0.503 0.636 0.785 1.371 0.309 3.119-1.061 3.904-0.232 0.133-0.481 0.233-0.744 0.297v7.599c1.528 0.364 2.472 1.897 2.107 3.425-0.064 0.272-0.169 0.533-0.309 0.775-0.789 1.364-2.535 1.832-3.903 1.043-0.261-0.151-0.5-0.345-0.701-0.572l-6.54 3.776c0.496 1.499-0.317 3.113-1.815 3.608-0.289 0.095-0.589 0.144-0.893 0.144-1.575 0.001-2.852-1.273-2.853-2.848 0-0.273 0.039-0.547 0.117-0.812l-6.581-3.796c-1.088 1.139-2.895 1.183-4.035 0.093-1.139-1.088-1.181-2.895-0.093-4.035 0.377-0.396 0.861-0.675 1.392-0.804l0.001-7.599c-1.533-0.368-2.477-1.911-2.108-3.445 0.063-0.264 0.164-0.519 0.299-0.755 0.789-1.365 2.536-1.832 3.903-1.043 0.236 0.135 0.452 0.304 0.64 0.503l6.584-3.8c-0.448-1.511 0.415-3.096 1.921-3.543 0.263-0.079 0.539-0.117 0.813-0.117 1.575-0.001 2.852 1.272 2.853 2.845 0.001 0.279-0.040 0.557-0.119 0.823zM18.048 4.837c-0.025 0.028-0.049 0.052-0.077 0.077l8.615 14.92c0.035-0.012 0.075-0.021 0.109-0.031v-7.609c-1.527-0.377-2.456-1.923-2.077-3.451 0.008-0.032 0.016-0.065 0.025-0.096l-6.595-3.811zM14.028 4.916l-0.080-0.080-6.595 3.803c0.436 1.513-0.436 3.091-1.948 3.527-0.035 0.011-0.068 0.019-0.101 0.028v7.611l0.112 0.031 8.612-14.919zM16.796 5.592c-0.52 0.149-1.071 0.149-1.589 0l-8.613 14.919c0.392 0.377 0.669 0.86 0.8 1.388h17.215c0.129-0.531 0.409-1.015 0.804-1.392l-8.616-14.915zM18.111 27.228l6.551-3.784c-0.020-0.063-0.036-0.125-0.051-0.189h-17.221l-0.028 0.111 6.585 3.803c0.517-0.539 1.245-0.871 2.053-0.871 0.836 0 1.587 0.359 2.111 0.931z"></path>
    </Svg>
  );
};

IconGraphQl.defaultProps = {
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

IconGraphQl.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconGraphQl };
