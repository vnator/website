import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconYarn = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.yarn' })}</title>
      <path
        fill="#2c8ebb"
        d="M16 0c-8.833 0-16 7.167-16 16s7.167 16 16 16 16-7.167 16-16-7.167-16-16-16zM17.024 5.473c0.244 0 0.484 0.071 0.7 0.209 0.167 0.111 0.383 0.247 1.007 1.539 0.413-0.117 0.624-0.056 0.735-0.025 0.272 0.075 0.488 0.253 0.617 0.5 0.636 1.223 0.723 3.404 0.445 4.807-0.321 1.643-1.007 2.705-1.508 3.435 0.432 0.439 1.037 1.199 1.489 2.433 0.371 1.032 0.413 1.971 0.364 2.687 0.317-0.149 0.58-0.295 0.832-0.456l-0.030 0.018c0.791-0.488 1.983-1.223 3.404-1.241 0.952-0.012 1.692 0.593 1.804 1.471 0.009 0.065 0.014 0.141 0.014 0.217 0 0.776-0.539 1.426-1.263 1.597l-0.011 0.002c-0.865 0.211-1.267 0.371-2.428 1.124-1.643 1.063-3.385 1.656-4.016 1.853-0.261 0.216-0.577 0.375-0.924 0.454l-0.015 0.003c-0.983 0.241-4.355 0.42-4.621 0.42h-0.061c-1.044 0-1.619-0.321-1.933-0.655-0.877 0.439-2.013 0.253-2.829-0.179-0.475-0.241-0.795-0.726-0.795-1.286 0-0.089 0.008-0.176 0.023-0.26l-0.001 0.009c-0.074-0.077-0.141-0.162-0.2-0.253l-0.004-0.007c-0.216-0.333-0.704-1.248-0.605-2.595 0.075-0.964 0.741-1.823 1.173-2.28-0.002-0.066-0.003-0.144-0.003-0.222 0-1.004 0.201-1.962 0.565-2.834l-0.018 0.049c0.408-0.969 1.18-1.797 1.76-2.316-0.427-0.716-0.859-1.823-0.439-2.947 0.303-0.803 0.549-1.248 1.093-1.44h-0.007c0.265-0.099 0.519-0.204 0.648-0.345 0.77-0.84 1.846-1.389 3.050-1.47l0.014-0.001c0.049-0.124 0.105-0.247 0.167-0.377 0.413-0.877 0.852-1.372 1.365-1.557 0.13-0.050 0.28-0.080 0.437-0.080h0zM17.032 6.407c-0.676 0.021-1.335 2.025-1.335 2.025s-1.693-0.272-3.021 1.161c-0.265 0.291-0.624 0.445-0.995 0.587-0.105 0.037-0.235 0.031-0.556 0.896-0.495 1.321 0.833 2.792 0.833 2.792s-1.581 1.119-2.168 2.508c-0.648 1.525-0.451 3.015-0.451 3.015s-1.124 0.976-1.199 1.983c-0.068 0.884 0.185 1.6 0.457 2.020 0.303 0.457 0.68 0.235 0.68 0.235s-0.748 0.871-0.049 1.241c0.636 0.333 1.711 0.525 2.28-0.049 0.413-0.413 0.495-1.335 0.648-1.711 0.037-0.087 0.16 0.148 0.279 0.265 0.129 0.124 0.352 0.26 0.352 0.26s-1.007 0.432-0.593 1.421c0.136 0.328 0.624 0.537 1.421 0.531 0.296-0.007 3.552-0.185 4.417-0.395 0.5-0.117 0.673-0.377 0.673-0.377s2.088-0.575 3.997-1.809c1.223-0.797 1.724-1.013 2.712-1.248 0.816-0.197 0.76-1.464-0.321-1.445-1.119 0.012-2.1 0.587-2.928 1.1-1.551 0.957-2.323 0.896-2.323 0.896l-0.024-0.043c-0.105-0.173 0.495-1.724-0.179-3.571-0.729-2.020-1.884-2.508-1.792-2.663 0.396-0.667 1.384-1.729 1.779-3.707 0.235-1.199 0.173-3.169-0.359-4.201-0.099-0.192-0.976 0.321-0.976 0.321s-0.821-1.828-1.051-1.977c-0.057-0.038-0.126-0.061-0.202-0.061-0.003 0-0.005 0-0.008 0h0z"></path>
    </Svg>
  );
};

IconYarn.defaultProps = {
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

IconYarn.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconYarn };
