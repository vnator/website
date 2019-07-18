import React from 'react';
import Type from 'prop-types';

import style from './Paragraph.module.css';

const Paragraph = ({ children }) => (
  <p className={style.Paragraph}>{children}</p>
);

Paragraph.propTypes = {
  children: Type.string.isRequired,
};

export { Paragraph };
