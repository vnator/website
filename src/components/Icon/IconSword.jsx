import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconSword = ({ className, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props} className={className}>
      <title>{formatMessage({ id: 'icon.figure.sword' })}</title>
      <path
        fill="#aab2bd"
        d="M19.097 19.097v2.581l-1.032 1.032-17.548-16.516v-5.677z"
      />
      <path
        fill="#e6e9ed"
        d="M6.194 0.516l16.516 17.548-1.032 1.032h-2.581l-18.581-18.581z"
      />
      <path
        fill="#fcd770"
        d="M30.963 27.876c-0.036-0.046-0.078-0.088-0.119-0.129l-1.424-1.424-3.097 3.097 1.424 1.424c0.041 0.041 0.083 0.083 0.129 0.119 0.392 0.335 0.893 0.521 1.419 0.521 0.604 0 1.151-0.248 1.548-0.64 0.392-0.397 0.64-0.944 0.64-1.548 0-0.526-0.186-1.027-0.521-1.419z"
      />
      <path
        fill="#838f9b"
        d="M23.226 25.29l2.065-2.065 3.613 3.613-2.065 2.065z"
      />
      <path
        fill="#fcd770"
        d="M26.323 22.194l-4.129 4.129-1.548-1.548 4.129-4.129z"
      />
      <path
        fill="#fcd770"
        d="M21.677 23.742l-4.129 4.129-3.613-1.032 5.161-5.161v1.032z"
      />
      <path
        fill="#fcd770"
        d="M26.839 13.935l1.032 3.613-4.129 4.129-1.032-2.581h-1.032z"
      />
      <path
        fill="#ffc729"
        d="M22.71 19.097l1.032 2.581-2.065 2.065-2.581-1.032v-3.613z"
      />
      <path
        fill="#000"
        d="M31.207 27.381l-1.788-1.788-0.516 0.516-2.883-2.883 1.032-1.032-1.548-1.548 2.947-2.947-1.356-4.748-4.373 4.373-16.304-17.323h-6.417v6.417l17.323 16.304-4.373 4.373 4.748 1.356 2.947-2.947 1.548 1.548 1.032-1.032 2.883 2.883-0.516 0.516 1.788 1.789c0.512 0.511 1.191 0.792 1.913 0.792 1.492 0 2.706-1.214 2.706-2.706 0-0.724-0.281-1.403-0.793-1.913zM27.291 17.398l-3.361 3.361-0.871-2.179h-0.136l3.66-3.66zM21.553 23.137l-1.94-0.776v-2.747h2.747l0.776 1.94zM1.032 5.971v-4.208l5.313 5.313 0.73-0.73-5.313-5.313h4.208l16.020 17.021-0.527 0.527h-2.153l-11.204-11.204-0.73 0.73 11.204 11.204v2.153l-0.527 0.527zM17.398 27.291l-2.477-0.708 3.66-3.66v0.136l2.179 0.872zM21.375 24.774l3.399-3.399 0.819 0.819-3.399 3.399zM23.956 25.29l1.335-1.335 2.883 2.883-1.335 1.335zM27.052 29.419l2.367-2.367 0.819 0.819-2.367 2.367zM29.294 30.968c-0.203 0-0.399-0.040-0.584-0.109l2.148-2.148c0.070 0.185 0.11 0.381 0.11 0.584 0 0.923-0.751 1.673-1.674 1.673z"
      />
      <path fill="#000" d="M20.645 20.645h1.032v1.032h-1.032z" />
      <path fill="#000" d="M16.151 7.075l0.73-0.73 5.161 5.161-0.73 0.73z" />
      <path fill="#000" d="M14.603 5.526l0.73-0.73 1.032 1.032-0.73 0.73z" />
      <path fill="#000" d="M6.345 16.881l0.73-0.73 5.161 5.161-0.73 0.73z" />
      <path fill="#000" d="M4.796 15.333l0.73-0.73 1.032 1.032-0.73 0.73z" />
      <path fill="#000" d="M1.699 16.881l0.73-0.73 5.161 5.161-0.73 0.73z" />
      <path fill="#000" d="M0.151 15.333l0.73-0.73 1.032 1.032-0.73 0.73z" />
      <path fill="#000" d="M16.151 2.43l0.73-0.73 5.161 5.161-0.73 0.73z" />
      <path fill="#000" d="M14.603 0.881l0.73-0.73 1.032 1.032-0.73 0.73z" />
    </Svg>
  );
};

IconSword.defaultProps = {
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

IconSword.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconSword };
