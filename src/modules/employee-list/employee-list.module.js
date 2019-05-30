import React from 'react';
import classnames from 'classnames';
import styles from './employee-list.module.scss';

const baseClassName = 'employee-list'

export default ({employeeList, selectedEmployeeId, handleSelect}) => (
  <ul className={styles[baseClassName]}>
    {
      employeeList.map((item, index) => {
        if (index === 0) {
          return (
            <li className={
              classnames(
                styles[`${baseClassName}__item--button`],
                {[styles[`${baseClassName}__item--active`]]: (selectedEmployeeId === 'default')},
              )}
                key="default"
                onClick={() => handleSelect({id:'default'})}
            >
              <button className={styles[`${baseClassName}__item__button`]}>немає значення</button>
            </li>)
        } else {
          return (
            <li className={
              classnames(
                styles[`${baseClassName}__item`],
                {[styles[`${baseClassName}__item--active`]]: (selectedEmployeeId === item.id)},
              )
            }
                key={item.id}
                onClick={() => handleSelect({ id: item.id, name: item.name})}
            >
              <img
                src={item.img}
                alt={item.name}
                className={styles[`${baseClassName}__item__image`]}
              />
              <p className={styles[`${baseClassName}__item__caption`]}>{item.name}</p>
              <span className={styles[`${baseClassName}__item__check-mark`]}/>
            </li>
          )
        }
      })
    }
  </ul>
);
