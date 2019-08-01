import React from 'react';
import Type from 'prop-types';

import style from './Title.module.css';
import { ROLE } from '../../constants/elementAttr';

const Title = ({ children }) => (
  <h2 role={ROLE.HEADING} aria-level={2} className={style.Title}>
    {children}
  </h2>
);

Title.propTypes = {
  children: Type.string.isRequired,
};

export { Title };
