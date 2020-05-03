import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import style from './Frame.module.css';
import { switchFrame } from './switchFrame';
import { Svg } from '../Svg/Svg';

const Frame = ({ className, frame }) => {
  const { formatMessage } = useIntl();

  const choosedFrame = switchFrame(frame);

  return (
    <Svg
      className={`${style.Frame} ${className}`}
      id="icon-vnator"
      viewBox={{ minX: 0, minY: 0, width: 127, height: 128 }}>
      <title>{formatMessage({ id: choosedFrame.intlId })}</title>
      {choosedFrame.frame()}
    </Svg>
  );
};

Frame.defaultProps = {
  className: '',
  frame: '',
};

Frame.propTypes = {
  className: Type.string,
  frame: Type.string,
};

export { Frame };
