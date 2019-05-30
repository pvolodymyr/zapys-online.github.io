import React from 'react';
import Button from '../../components/button/button.component';
import { Link } from "react-router-dom";
import styles from './action-panel.module.scss';
import buttonStyles from '../../components/button/button.module.scss';

const baseClassName = 'action-panel';

export default ({ path }) => (
  <div className={styles[baseClassName]}>
    <Link to={path} className={buttonStyles.button}>Продовжити</Link>
  </div>
);