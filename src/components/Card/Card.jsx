import React from 'react';
import Type from 'prop-types';

import style from './Card.module.css';
import { Frame } from '../Frame/Frame';
import { FRAME } from '../../constants/frame';

const Card = ({ title, icon, content, className }) => {
  return (
    <article className={`${style.card} ${className}`}>
      <div className={style.container}>
        <Frame frame={FRAME.LINED_TOP_LEFT} className={style.top} />
        <header>
          <h2 className={style.title}>{title}</h2>
          {icon}
        </header>
        <p className={style.content}>
          <span className={style.coma}>"</span>
          {'  '}
          {content}
          <span className={style.coma}>"</span>- Vnator
        </p>
        <Frame frame={FRAME.LINED_BOTTOM_RIGHT} className={style.bottom} />
      </div>
    </article>
  );
};

Card.propTypes = {
  title: Type.string.isRequired,
  className: Type.string.isRequired,
  icon: Type.element.isRequired,
  content: Type.string.isRequired,
};

export { Card };
