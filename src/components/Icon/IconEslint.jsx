import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconEslint = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.frontend.eslint' })}</title>
      <path
        fill="#4b32c3"
        d="M9.676 12.176l6.079-3.509c0.070-0.041 0.155-0.066 0.245-0.066s0.175 0.024 0.248 0.067l-0.002-0.001 6.079 3.509c0.148 0.087 0.245 0.245 0.245 0.426 0 0 0 0.001 0 0.001v-0 7.017c-0 0.181-0.098 0.338-0.243 0.424l-0.002 0.001-6.079 3.509c-0.070 0.041-0.155 0.066-0.245 0.066s-0.175-0.024-0.248-0.067l0.002 0.001-6.079-3.509c-0.148-0.087-0.245-0.245-0.245-0.426 0-0 0-0.001 0-0.001v0-7.016c0-0 0-0 0-0 0-0.181 0.098-0.339 0.243-0.425l0.002-0.001zM31.803 15.373l-7.261-12.633c-0.264-0.457-0.752-0.795-1.28-0.795h-14.521c-0.528 0-1.016 0.337-1.28 0.795l-7.261 12.605c-0.124 0.214-0.198 0.471-0.198 0.745s0.073 0.531 0.201 0.752l-0.004-0.007 7.263 12.531c0.263 0.456 0.751 0.689 1.279 0.689h14.524c0.527 0 1.013-0.227 1.279-0.683l7.261-12.551c0.124-0.207 0.198-0.457 0.198-0.724s-0.073-0.517-0.201-0.73l0.004 0.007zM25.791 21.448c-0.005 0.193-0.112 0.36-0.269 0.449l-0.003 0.001-9.252 5.336c-0.075 0.044-0.165 0.069-0.261 0.069s-0.186-0.026-0.264-0.071l0.003 0.001-9.257-5.336c-0.16-0.091-0.268-0.257-0.273-0.45l-0-0.001v-10.675c0-0.187 0.111-0.359 0.272-0.451l9.248-5.336c0.16-0.093 0.363-0.093 0.523 0l9.257 5.337c0.161 0.090 0.269 0.257 0.275 0.45l0 0.001z"></path>
    </Svg>
  );
};

IconEslint.defaultProps = {
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

IconEslint.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconEslint };