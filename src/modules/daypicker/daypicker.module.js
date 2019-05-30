import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import './daypicker-module.css';
import { setDate } from "../../models/actions/time-list.actions";

const MONTHS = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const WEEKDAYS_LONG = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П\'ятниця',
  'Субота',
];
const WEEKDAYS_SHORT = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

class Ukrainian extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.props.handleSelect(day)
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();


    return (
      <DayPicker
        locale="ukr"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
        disabledDays={[
          {
            before: new Date(year, month, day),
          },
        ]}
        firstDayOfWeek={1}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(setDate(data)),
})

// const mapStateToProps = state => ({
//   selectedDate: state.timeList,
// });

export default connect(
  null,
  mapDispatchToProps,
)(Ukrainian);