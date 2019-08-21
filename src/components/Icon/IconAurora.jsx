import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconAurora = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.persistence.awsAurora' })}</title>
      <path d="M10.829 12.599c-3.307 0-6.827-1.003-6.827-2.859s3.511-2.859 6.827-2.859 6.827 1.003 6.827 2.859-3.524 2.859-6.827 2.859zM10.829 7.735c-3.413 0-5.973 1.058-5.973 2.005s2.56 2.005 5.973 2.005 5.973-1.058 5.973-2.005-2.564-2.005-5.973-2.005z"></path>
      <path d="M16.815 9.869h0.853v7.253h-0.853v-7.253z"></path>
      <path d="M10.825 26.453c-3.302 0-6.827-0.99-6.827-2.829v-13.756h0.853v13.764c0 0.939 2.56 1.984 5.973 1.984s5.973-1.045 5.973-1.984v-1.391h0.853v1.391c0.017 1.839-3.52 2.82-6.827 2.82z"></path>
      <path d="M10.829 17.421c-3.302 0-6.827-1.003-6.827-2.859h0.853c0 0.947 2.56 2.005 5.973 2.005s5.973-1.058 5.973-2.005h0.853c-0.009 1.856-3.52 2.859-6.827 2.859z"></path>
      <path d="M10.859 22.114c-3.302 0-6.827-1.003-6.827-2.859h0.853c0 0.947 2.56 2.005 5.973 2.005 0.053 0.001 0.116 0.001 0.179 0.001 1.408 0 2.764-0.219 4.037-0.624l-0.094 0.026 0.273 0.806c-1.261 0.409-2.712 0.645-4.218 0.645-0.062 0-0.124-0-0.186-0.001l0.009 0z"></path>
      <path d="M20.843 26.825c-0.236 0-0.427-0.191-0.427-0.427v0c0-2.931-3.349-6.289-6.293-6.289-0.236 0-0.427-0.191-0.427-0.427s0.191-0.427 0.427-0.427v0c2.94 0 6.293-3.354 6.293-6.293 0-0.236 0.191-0.427 0.427-0.427s0.427 0.191 0.427 0.427v0c0 2.94 3.349 6.293 6.293 6.293 0.236 0 0.427 0.191 0.427 0.427s-0.191 0.427-0.427 0.427v0c-2.944 0-6.293 3.349-6.293 6.289 0 0.236-0.191 0.427-0.427 0.427v0zM16.213 19.682c2.092 0.907 3.726 2.544 4.608 4.581l0.022 0.057c0.905-2.097 2.544-3.735 4.585-4.616l0.057-0.022c-2.099-0.905-3.737-2.544-4.62-4.585l-0.022-0.057c-0.903 2.096-2.537 3.733-4.573 4.62l-0.057 0.022z"></path>
      <path d="M22.788 9.442h0.853v2.56h-0.853v-2.56z"></path>
      <path d="M21.935 10.295h2.56v0.853h-2.56v-0.853z"></path>
      <path d="M18.095 5.175h0.853v2.56h-0.853v-2.56z"></path>
      <path d="M17.242 6.029h2.56v0.853h-2.56v-0.853z"></path>
    </Svg>
  );
};

IconAurora.defaultProps = {
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

IconAurora.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconAurora };
