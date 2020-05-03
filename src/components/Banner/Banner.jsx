import React from 'react';
import Type from 'prop-types';

import style from './Banner.module.css';
import { BANNER_STATUS } from '../../constants/banner';
import { Frame } from '../Frame/Frame';
import { FRAME } from '../../constants/frame';

let Banner = ({ title, content, status, img, white }) => {
  let statusClass = '';

  switch (status) {
    case BANNER_STATUS.END:
      statusClass = style._end;
      break;
    case BANNER_STATUS.CENTER:
      statusClass = style._center;
      break;
    default:
      statusClass = style._start;
      break;
  }

  return (
    <div className={`${style.Banner} ${statusClass}`}>
      <div className={style.background}>
        <img
          alt={title}
          srcSet={`${img.desktop}, ${img.mobile} 768w`}
          className={style.img}
        />
        <div className={style.cover} />
      </div>
      <div className={style.container}>
        <div className={`${style.text} ${white ? style._white : ''}`}>
          <h2 className={style.title}>{title}</h2>
          {content ? <p className={style.content}>{content}</p> : ''}
        </div>
        <Frame className={style.frame} frame={FRAME.FLORAL_BOTTOM_RIGHT} />
      </div>
    </div>
  );
};

Banner.defaultProps = {
  content: undefined,
  white: false,
};

Banner.propTypes = {
  title: Type.string.isRequired,
  content: Type.string,
  status: Type.string.isRequired,
  img: Type.shape({
    desktop: Type.string,
    mobile: Type.string,
  }).isRequired,
  white: Type.bool,
};

export { Banner };
