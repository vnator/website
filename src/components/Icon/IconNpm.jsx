import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconNpm = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.npm' })}</title>
      <path
        fill="#cb3837"
        d="M0 9.779v10.667h8.888v1.776h7.112v-1.776h16v-10.667h-32zM8.888 18.664h-1.776v-5.333h-1.78v5.333h-3.552v-7.108h7.108v7.108zM14.221 18.664v1.781h-3.553v-8.889h7.112v7.109l-3.559-0.001zM30.223 18.664h-1.773v-5.333h-1.781v5.333h-1.78v-5.333h-1.773v5.333h-3.561v-7.108h10.669v7.108zM14.22 13.333h1.78v3.556h-1.78v-3.556z"></path>
    </Svg>
  );
};

IconNpm.defaultProps = {
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

IconNpm.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconNpm };