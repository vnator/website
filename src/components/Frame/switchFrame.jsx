import React from 'react';
import { FRAME } from '../../constants/frame';
import { FloralBottomRight } from './FloralBottomRight';
import { FloralLeftTop } from './FloralLeftTop';
import { LinedLeftTop } from './LinedLeftTop';
import { LinedBottomRight } from './LinedBottomRight';
import { Arrow } from './Arrow';

const switchFrame = (frame) => {
  switch (frame) {
    case FRAME.FLORAL_TOP_LEFT:
      return {
        frame: () => <FloralLeftTop />,
        intlId: 'frame.flora.leftTop',
      };
    case FRAME.FLORAL_BOTTOM_RIGHT:
      return {
        frame: () => <FloralBottomRight />,
        intlId: 'frame.flora.leftTop',
      };
    case FRAME.LINED_TOP_LEFT:
      return {
        frame: () => <LinedLeftTop />,
        intlId: 'frame.flora.leftTop',
      };
    case FRAME.LINED_BOTTOM_RIGHT:
      return {
        frame: () => <LinedBottomRight />,
        intlId: 'frame.flora.leftTop',
      };
    default:
      return {
        frame: () => <Arrow />,
        intlId: 'frame.arrow',
      };
  }
};

export { switchFrame };
