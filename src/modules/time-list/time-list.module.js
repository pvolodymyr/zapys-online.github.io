import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './time-list.module.scss';
import Radio from '../../components/radio/radio.component';

const baseClassName = 'time-list';

export default class TimeList extends Component {
  constructor(props) {
    super(props);
    this.satate = {
      selected: '',
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect({target}) {
    const { checked, value } = target;
    const { handleSelect } = this.props;
    
    console.log(checked, value);
    handleSelect({
      checked,
      value,
    })
  }

  render() {
    const { timeList, selectedTime } = this.props;

    return(
      <ul className={styles[baseClassName]}>
        {
          timeList.map(({time}, index) => {
            console.log('time', time)
              return (
                <li key={`${time} - ${index}`} className={classnames(
                  styles[`${baseClassName}__item`],
                  {[styles[`${baseClassName}__item--selected`]]: selectedTime && selectedTime === time},
                )}>
                  <label
                    htmlFor={`${time} - ${index}`}
                    className={styles[`${baseClassName}__item__label`]}
                  >
                    <span className={styles[`${baseClassName}__item__icon`]} />
                  <input
                    type="radio"
                    name="time-item"
                    className={styles[`${baseClassName}__item__input`]}
                    id={`${time} - ${index}`}
                    value={time}
                    onClick={this.handleSelect}
                  />
                  <span>{time}</span>
                  </label>
                </li>
              )
            }
          )
        }
      </ul>
    )
  }
}
