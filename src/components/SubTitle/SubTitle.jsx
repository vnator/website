import React from 'react';
import Type from 'prop-types';

import style from './SubTitle.module.css';
import { ROLE } from '../../constants/elementAttr';

const SubTitle = ({ children }) => (
  <h3 role={ROLE.HEADING} aria-level={3} className={style.SubTitle}>
    {children}
  </h3>
);

SubTitle.propTypes = {
  children: Type.string.isRequired,
};

export { SubTitle };
