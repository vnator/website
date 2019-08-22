import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconTower = ({ className, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props} className={className}>
      <title>{formatMessage({ id: 'icon.figure.tower' })}</title>
      <path
        fill="#b6bccf"
        d="M14.438 3.688v-3.125h-3.125v3.125h-3.125v-3.125h-3.125v6.25c0 0.344 0.281 0.625 0.625 0.625h20.625c0.344 0 0.625-0.281 0.625-0.625v-6.25h-3.125v3.125h-3.125v-3.125h-3.125v3.125z"
      />
      <path
        fill="#8690af"
        d="M26 7.438h-20v1.875c0 0.344 0.281 0.625 0.625 0.625h18.75c0.344 0 0.625-0.281 0.625-0.625z"
      />
      <path
        fill="#b6bccf"
        d="M24.75 9.938h-17.5l-1.563 18.875h7.5v-4.688c0-1.547 1.266-2.813 2.813-2.813s2.813 1.266 2.813 2.813v4.688h7.5zM16 13.959c0.688 0 1.25 0.563 1.25 1.25v2.083h-2.5v-2.083c0-0.688 0.563-1.25 1.25-1.25z"
      />
      <path
        fill="#8690af"
        d="M17.25 15.209c0-0.688-0.563-1.25-1.25-1.25s-1.25 0.563-1.25 1.25v2.083h2.5z"
      />
      <path
        fill="#c68a65"
        d="M18.813 24.125c0-1.547-1.266-2.813-2.813-2.813s-2.813 1.266-2.813 2.813v4.688h5.625z"
      />
      <path
        fill="#8690af"
        d="M18.813 28.813h-13.125c-0.344 0-0.625 0.281-0.625 0.625v1.875h21.875v-1.875c0-0.344-0.281-0.625-0.625-0.625z"
      />
      <path
        fill="#000"
        d="M26.9 28.335l-1.472-17.775c0.664-0.029 1.197-0.576 1.197-1.247v-1.291c0.538-0.139 0.938-0.628 0.938-1.209v-6.25c0-0.345-0.28-0.625-0.625-0.625h-3.125c-0.345 0-0.625 0.28-0.625 0.625v2.5h-1.875v-2.5c0-0.345-0.28-0.625-0.625-0.625h-3.125c-0.345 0-0.625 0.28-0.625 0.625v2.5h-1.875v-2.5c0-0.345-0.28-0.625-0.625-0.625h-3.125c-0.345 0-0.625 0.28-0.625 0.625v2.5h-1.875v-2.5c0-0.345-0.28-0.625-0.625-0.625h-3.125c-0.166 0-0.325 0.066-0.442 0.183s-0.183 0.276-0.183 0.442v6.25c0 0.581 0.399 1.070 0.938 1.209v1.291c0 0.671 0.532 1.219 1.196 1.247l-1.471 17.775c-0.394 0.211-0.662 0.626-0.662 1.103v1.875c0 0.345 0.28 0.625 0.625 0.625h21.875c0.345 0 0.625-0.28 0.625-0.625v-1.875c0-0.477-0.269-0.892-0.662-1.103zM13.813 28.188v-4.063c0-1.206 0.981-2.188 2.188-2.188s2.188 0.981 2.188 2.188v4.063zM19.438 24.75h0.625c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625h-0.683c-0.295-1.598-1.698-2.813-3.379-2.813-1.896 0-3.438 1.542-3.438 3.438v1.563h-0.625c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h0.625v1.25h-6.196l1.252-15.125h0.882c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625h-0.778l0.104-1.25h16.349l0.104 1.25h-0.778c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h0.882l1.045 12.625h-1.010c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h1.113l0.104 1.25h-6.196zM7.562 1.188v2.5c0 0.345 0.28 0.625 0.625 0.625h3.125c0.345 0 0.625-0.28 0.625-0.625v-2.5h1.875v2.5c0 0.345 0.28 0.625 0.625 0.625h3.125c0.345 0 0.625-0.28 0.625-0.625v-2.5h1.875v2.5c0 0.345 0.28 0.625 0.625 0.625h3.125c0.345 0 0.625-0.28 0.625-0.625v-2.5h1.875v5.625h-13.438c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h12.5v1.25h-18.75v-1.25h0.625c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625h-1.563v-5.625zM5.687 30.688v-1.25h20.625v1.25z"
      />
      <path
        fill="#000"
        d="M16 13.334c-0.815 0-1.51 0.522-1.768 1.25h-0.732c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h0.625v1.458c0 0.345 0.28 0.625 0.625 0.625h2.5c0.345 0 0.625-0.28 0.625-0.625v-2.083c0-1.034-0.841-1.875-1.875-1.875zM16.625 16.667h-1.25v-1.458c0-0.345 0.28-0.625 0.625-0.625s0.625 0.28 0.625 0.625z"
      />
      <path
        fill="#000"
        d="M11.104 19.728h-1.25c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h1.25c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625z"
      />
      <path
        fill="#000"
        d="M21.729 16.667h-1.25c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625h1.25c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625z"
      />
      <path
        fill="#000"
        d="M15.063 25.688h-0.001c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625 0.625-0.28 0.625-0.625-0.28-0.625-0.625-0.625z"
      />
      <path
        fill="#000"
        d="M21.605 25.688h-0c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625 0.625-0.28 0.625-0.625-0.28-0.625-0.625-0.625z"
      />
      <path
        fill="#000"
        d="M10.063 8.063c0.345 0 0.625-0.28 0.625-0.625s-0.28-0.625-0.625-0.625h-0.001c-0.345 0-0.625 0.28-0.625 0.625s0.28 0.625 0.625 0.625z"
      />
    </Svg>
  );
};

IconTower.defaultProps = {
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

IconTower.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconTower };
