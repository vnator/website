import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconAndroid = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.mobile.android' })}</title>
      <path
        fill="#a4c639"
        d="M29.528 12.303c0-1.087-0.877-1.971-1.968-1.971s-1.973 0.88-1.973 1.973v8.253c0 1.080 0.884 1.973 1.977 1.973 1.085 0 1.968-0.893 1.968-1.973v-8.267h-0.013zM7.191 10.709l0.005 12.8c0 1.18 0.939 2.12 2.097 2.12h1.417v4.373c0 1.093 0.88 1.976 1.96 1.976s1.956-0.88 1.973-1.957v-4.373h2.657v4.373c0 1.097 0.88 1.977 1.96 1.977 1.097 0 1.976-0.88 1.976-1.987v-4.373h1.437c1.16 0 2.097-0.947 2.097-2.104v-12.84l-17.585 0.015zM20.055 6.803c-0.413 0-0.747-0.333-0.747-0.747 0-0.407 0.333-0.744 0.747-0.747 0.413 0 0.747 0.34 0.747 0.747 0 0.413-0.333 0.747-0.747 0.747zM11.975 6.803c-0.413 0-0.747-0.333-0.747-0.747 0-0.409 0.333-0.744 0.747-0.744s0.747 0.34 0.747 0.76-0.336 0.756-0.76 0.756zM20.348 2.961l1.372-2.521c0.080-0.14 0.019-0.301-0.101-0.38-0.139-0.060-0.299-0.020-0.379 0.12l-1.4 2.533c-1.157-0.54-2.475-0.84-3.853-0.84s-2.691 0.287-3.856 0.804l-1.379-2.537c-0.071-0.131-0.24-0.18-0.371-0.107-0.133 0.060-0.181 0.24-0.107 0.36l1.373 2.5c-2.707 1.396-4.533 4.053-4.533 7.107h17.771c0-3.053-1.824-5.711-4.528-7.107zM4.44 10.323c-1.089 0-1.973 0.887-1.973 1.977v8.256c0 1.093 0.885 1.973 1.979 1.973 1.085 0 1.969-0.88 1.969-1.973v-8.253c0-1.087-0.88-1.971-1.96-1.971z"></path>
    </Svg>
  );
};

IconAndroid.defaultProps = {
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

IconAndroid.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconAndroid };
