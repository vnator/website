import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from '../Svg/Svg';

const IconCloudFormation = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>
        {formatMessage({ id: 'icon.archtectural.awsCloudformation' })}
      </title>
      <path d="M26.667 14.933c0 0.017 0 0.037 0 0.058 0 1.81-1.409 3.291-3.19 3.406l-0.010 0.001h-6.187v-0.853h6.187c0.060 0 2.368-0.256 2.368-2.615 0-1.98-1.655-2.475-2.364-2.598-0.203-0.036-0.355-0.21-0.355-0.421 0-0.023 0.002-0.046 0.005-0.068l-0 0.002c0-0.853-0.358-1.463-0.986-1.668-0.133-0.047-0.287-0.075-0.447-0.075-0.455 0-0.858 0.221-1.108 0.561l-0.003 0.004c-0.079 0.106-0.203 0.174-0.344 0.174-0.029 0-0.058-0.003-0.085-0.009l0.003 0c-0.157-0.025-0.284-0.132-0.336-0.274l-0.001-0.003c-0.227-0.68-0.583-1.263-1.043-1.747l0.002 0.002c-0.696-0.729-1.675-1.182-2.76-1.182-0.561 0-1.093 0.121-1.573 0.338l0.024-0.010c-0.837 0.398-1.492 1.063-1.867 1.883l-0.010 0.024h-0.939c0.445-1.2 1.324-2.151 2.441-2.68l0.029-0.012c0.554-0.25 1.201-0.396 1.882-0.396 1.319 0 2.511 0.547 3.36 1.428l0.001 0.001c0.412 0.416 0.755 0.901 1.010 1.436l0.014 0.032c0.356-0.253 0.799-0.404 1.277-0.404 0.256 0 0.502 0.043 0.731 0.123l-0.016-0.005c0.909 0.337 1.547 1.191 1.562 2.196l0 0.002c1.374 0.329 2.726 1.365 2.726 3.349zM14.72 14.562v-2.987h-8.533v12.8h8.533v-7.253h0.853v7.68c0 0.236-0.191 0.427-0.427 0.427v0h-9.387c-0.236 0-0.427-0.191-0.427-0.427v0-13.653c0-0.236 0.191-0.427 0.427-0.427v0h9.387c0.236 0 0.427 0.191 0.427 0.427v0 3.413zM20.267 15.415h-12.8v0.853h12.8zM10.88 13.282h-3.413v0.853h3.413zM12.16 17.549h-4.693v0.853h4.693zM10.415 19.682h-2.931v0.853h2.931zM13.44 19.682h-2.133v0.853h2.133zM22.827 15.415h-1.707v0.853h1.707z"></path>
    </Svg>
  );
};

IconCloudFormation.defaultProps = {
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

IconCloudFormation.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconCloudFormation };
