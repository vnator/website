import React from 'react';
import Type from 'prop-types';

import style from './Title.module.css';
import { ROLE } from '../../constants/elementAttr';

const switchHeading = (level, props, content) => {
  switch (level) {
    case 1:
      return <h1 {...props}>{content}</h1>;
    case 3:
      return <h3 {...props}>{content}</h3>;
    case 4:
      return <h4 {...props}>{content}</h4>;
    case 5:
      return <h5 {...props}>{content}</h5>;
    case 6:
      return <h6 {...props}>{content}</h6>;
    default:
      return <h2 {...props}>{content}</h2>;
  }
};

const Title = ({ children, level }) => {
  const props = {
    role: ROLE.HEADING,
    'aria-level': level,
    className: `${style.Title} ${style[`_level-${level}`]}`,
  };

  return switchHeading(level, props, children);
};

Title.defaultProps = {
  level: 2,
};

Title.propTypes = {
  children: Type.oneOfType([Type.string, Type.arrayOf(Type.string)]).isRequired,
  level: Type.number,
};

export { Title };
