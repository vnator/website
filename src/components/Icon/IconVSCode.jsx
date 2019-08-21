import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconVSCode = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.vscode' })}</title>
      <path
        fill="#007acc"
        d="M32 3.333v25.333l-8 3.333-24-7.333v-0.748l24 2.060v-25.979zM1.333 17.481l4.513-4.148-4.513-4.148 1.891-1.103 4.58 3.451 8.196-7.533 4 1.941v14.784l-4 1.941-8.196-7.533-4.579 3.452zM10.192 13.333l5.808 4.377v-8.755z"></path>
    </Svg>
  );
};

IconVSCode.defaultProps = {
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

IconVSCode.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconVSCode };
