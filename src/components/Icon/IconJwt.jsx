import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconJwt = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.dev.jwt' })}</title>
      <path
        fill="#fff"
        d="M18.313 8.618l-0.032-8.523h-4.752l0.032 8.523 2.376 3.263 2.376-3.263z"
      />
      <path
        fill="#fff"
        d="M13.56 23.224v8.554h4.752v-8.554l-2.376-3.263-2.376 3.263z"
      />
      <path
        fill="#00f2e6"
        d="M18.313 23.224l5.006 6.907 3.834-2.788-5.006-6.907-3.834-1.236v4.024z"
      />
      <path
        fill="#00f2e6"
        d="M13.56 8.618l-5.038-6.907-3.834 2.788 5.006 6.907 3.865 1.236v-4.024z"
      />
      <path
        fill="#00b9f1"
        d="M9.695 11.406l-8.111-2.63-1.457 4.499 8.111 2.661 3.834-1.267-2.376-3.263z"
      />
      <path
        fill="#00b9f1"
        d="M19.77 17.172l2.376 3.263 8.111 2.63 1.457-4.499-8.111-2.63-3.834 1.236z"
      />
      <path
        fill="#d63aff"
        d="M23.604 15.937l8.111-2.661-1.457-4.499-8.111 2.63-2.376 3.263 3.834 1.267z"
      />
      <path
        fill="#d63aff"
        d="M8.238 15.937l-8.111 2.63 1.457 4.499 8.111-2.63 2.376-3.263-3.834-1.236z"
      />
      <path
        fill="#fb015b"
        d="M9.695 20.436l-5.006 6.907 3.834 2.788 5.038-6.907v-4.024l-3.865 1.236z"
      />
      <path
        fill="#fb015b"
        d="M22.147 11.406l5.006-6.907-3.834-2.788-5.006 6.907v4.024l3.834-1.236z"
      />
    </Svg>
  );
};

IconJwt.defaultProps = {
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

IconJwt.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconJwt };
