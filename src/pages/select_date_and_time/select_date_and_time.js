import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import DayPicker from '../../modules/daypicker/daypicker.module';
import styles from './select_date_and_time.module.scss';
import TimeList from '../../modules/time-list/time-list.module';
import { setSelectedTime} from "../../models/actions/time-list.actions";
import ActionPanel from "../../modules/action-panel/action-panel.module";

const baseClassName = 'datetime-page';

const SelectDateAndTime = props => {
  const { timeList, selectedTime, handleSelect } = props;
  console.log(props.state);

  return (
    <div className={styles[baseClassName]}>
      <div className={styles[`${baseClassName}__header`]}>
        <header className={styles[`${baseClassName}__header__body`]}>
          <Link to="/" className={styles[`${baseClassName}__header__body__link-back`]}>Hазад</Link>
          <h1 className={styles[`${baseClassName}__header__body__page-caption`]}>
            Вибір дати та часу
          </h1>
        </header>
        <DayPicker/>
      </div>
      <h3 className={styles[`${baseClassName}__header__sub-headline`]}>Виберіть час</h3>
      <TimeList {...timeList} selectedTime={selectedTime} handleSelect={handleSelect} />
      {selectedTime && <ActionPanel path="/confirmation" />}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(setSelectedTime(data)),
})

const mapStateToProps = state => ({
  timeList: state.timeList,
  selectedTime: state.orderInfo.selectedTime && state.orderInfo.selectedTime.value,
  state: state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectDateAndTime);