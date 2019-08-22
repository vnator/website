import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconShopify = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.shopify' })}</title>
      <path
        fill="#7ab55c"
        d="M20.449 31.972l9.621-2.081s-3.472-23.484-3.5-23.64c-0.024-0.155-0.152-0.256-0.281-0.256s-2.572-0.181-2.572-0.181-1.7-1.699-1.919-1.881c-0.060-0.049-0.1-0.076-0.161-0.099l-1.219 28.139h0.031zM15.613 15.073s-1.080-0.565-2.365-0.565c-1.929 0-2.005 1.208-2.005 1.521 0 1.643 4.32 2.287 4.32 6.172 0 3.060-1.92 5.013-4.541 5.013-3.139 0-4.72-1.953-4.72-1.953l0.861-2.781s1.66 1.421 3.040 1.421c0.9 0 1.3-0.727 1.3-1.243 0-2.159-3.539-2.259-3.539-5.812-0.045-2.983 2.095-5.888 6.436-5.888 1.676 0 2.5 0.481 2.5 0.481l-1.26 3.62-0.027 0.013zM14.893 1.107c0.181 0 0.361 0.051 0.54 0.18-1.312 0.62-2.752 2.185-3.344 5.323-0.875 0.284-1.724 0.54-2.519 0.771 0.692-2.38 2.364-6.26 5.323-6.26v-0.013zM16.54 5.039v0.18c-1.005 0.309-2.111 0.645-3.192 0.981 0.621-2.369 1.777-3.527 2.78-3.961 0.257 0.668 0.412 1.568 0.412 2.8zM17.259 2.060c0.925 0.099 1.521 1.156 1.905 2.34-0.465 0.152-0.98 0.308-1.544 0.488v-0.336c0-1.003-0.128-1.828-0.361-2.495v0.003zM21.248 3.779c-0.027 0-0.080 0.028-0.104 0.028s-0.385 0.1-0.952 0.28c-0.564-1.644-1.568-3.16-3.344-3.16h-0.153c-0.515-0.648-1.136-0.927-1.675-0.927-4.141 0-6.12 5.169-6.74 7.795-1.592 0.487-2.751 0.848-2.88 0.899-0.9 0.284-0.925 0.309-1.029 1.16-0.1 0.616-2.44 18.751-2.44 18.751l18.081 3.396 1.236-28.221z"></path>
    </Svg>
  );
};

IconShopify.defaultProps = {
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

IconShopify.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconShopify };
