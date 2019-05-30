import React from 'react';
import classnames from 'classnames';
import styles from './radio.module.scss';

const baseClassName = 'radio'

export default props => {
  const { time, handleClick } = props;
  console.log(props);
  return (
    <>
      <input
        type="radio"
        name="time-item"
        className={styles[baseClassName]}
        id={`radio-${time}`}
        value={time}
        onClick={handleClick}
      />
      <label htmlFor={`radio-${time}`} className={styles[`${baseClassName}__label`]}>
        <div className={styles[`${baseClassName}__label__circle-line`]}>
          <div className={styles[`${baseClassName}__label__circle-line__line`]} />
        </div>
        <div className={styles[`${baseClassName}__label__circle-line`]}>
          <div className={styles[`${baseClassName}__label__circle-line__line`]} />
        </div>
        <div className={styles[`${baseClassName}__label__check-wrap`]}>
          <div className={styles[`${baseClassName}__label__check-wrap__check`]} />
        </div>
      </label>
    </>
  )
}