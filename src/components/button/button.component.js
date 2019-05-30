import React from 'react';
import styles from './button.module.scss';
const baseClassName = 'button';

export default props => {
  return (
    <button className={styles[baseClassName]}>{props.children}</button>
  )
};

