import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconPwa = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.pwa' })}</title>
      <path
        fill="#3d3d3d"
        d="M23.551 19.866l0.924-2.338h2.669l-1.267-3.546 1.584-4.006 4.538 12.048h-3.346l-0.775-2.158h-4.327z"></path>
      <path
        fill="#5a0fc8"
        d="M20.696 22.024l4.858-12.048-3.22 0-3.323 7.785-2.363-7.785h-2.475l-2.537 7.785-1.789-3.548-1.619 4.988 1.644 2.821h3.169l2.293-6.982 2.186 6.982h3.178z"></path>
      <path
        fill="#3d3d3d"
        d="M3.057 17.889h1.984c0.601 0 1.136-0.067 1.605-0.201l1.947-5.997c-0.109-0.173-0.234-0.337-0.374-0.491-0.736-0.815-1.813-1.222-3.231-1.222h-4.987v12.048h3.057v-4.136zM5.683 12.748c0.287 0.29 0.431 0.677 0.431 1.162 0 0.489-0.126 0.877-0.379 1.163-0.277 0.318-0.788 0.478-1.531 0.478h-1.147v-3.237h1.155c0.693 0 1.183 0.145 1.471 0.434z"></path>
    </Svg>
  );
};

IconPwa.defaultProps = {
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

IconPwa.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconPwa };
