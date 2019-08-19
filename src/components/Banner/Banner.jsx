import React from 'react';

import style from './Banner.module.css';
import { BANNER_STATUS } from '../../constants/banner';

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
      <div className={`${style.text} ${white ? style._white : ''}`}>
        <h2 className={style.title}>{title}</h2>
        {content ? <p className={style.content}>{content}</p> : ''}
      </div>
    </div>
  );
};

export { Banner };
