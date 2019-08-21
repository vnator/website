import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconEC2 = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.archtectural.awsEc2' })}</title>
      <path d="M25.809 17.28h-2.133v-0.853h2.133v-10.24h-10.24v2.133h-0.853v-2.133c0-0.471 0.382-0.853 0.853-0.853v0h10.24c0.471 0 0.853 0.382 0.853 0.853v0 10.24c0 0.471-0.382 0.853-0.853 0.853v0z"></path>
      <path d="M16.422 26.667h-10.24c-0.471 0-0.853-0.382-0.853-0.853v0-10.24c0-0.471 0.382-0.853 0.853-0.853v0h2.133v0.853h-2.133v10.24h10.24v-2.133h0.853v2.133c0 0.471-0.382 0.853-0.853 0.853v0z"></path>
      <path d="M22.827 12.16v-0.853h-1.28c-0.037-0.455-0.398-0.816-0.85-0.853l-0.003-0v-1.28h-0.853v1.28h-1.28v-1.28h-0.853v1.28h-1.28v-1.28h-0.853v1.28h-1.28v-1.28h-0.853v1.28h-1.28v-1.28h-0.853v1.28c-0.455 0.037-0.816 0.398-0.853 0.85l-0 0.003h-1.28v0.853h1.28v1.28h-1.28v0.853h1.28v1.28h-1.28v0.853h1.28v1.28h-1.28v0.853h1.28v1.28h-1.28v0.853h1.28c0.037 0.455 0.398 0.816 0.85 0.853l0.003 0v1.28h0.853v-1.28h1.28v1.28h0.853v-1.28h1.28v1.28h0.853v-1.28h1.28v1.28h0.853v-1.28h1.28v1.28h0.853v-1.28c0.455-0.037 0.816-0.398 0.853-0.85l0-0.003h1.28v-0.853h-1.28v-1.28h1.28v-0.853h-1.28v-1.28h1.28v-0.853h-1.28v-1.28h1.28v-0.853h-1.28v-1.28zM20.693 20.617c0 0.042-0.034 0.077-0.077 0.077v0h-9.233c-0.042 0-0.077-0.034-0.077-0.077v0-9.233c0-0.042 0.034-0.077 0.077-0.077v0h9.233c0.042 0 0.077 0.034 0.077 0.077v0z"></path>
    </Svg>
  );
};

IconEC2.defaultProps = {
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

IconEC2.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconEC2 };
