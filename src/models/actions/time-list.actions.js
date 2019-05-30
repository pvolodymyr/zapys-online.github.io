import {TIME_LIST_SET_DATA, TIME_LIST_SET_SELECTED_TIME, BOOKING_DATE_SET_DATE} from '../../config/constants';

export const setSelectedTime = payload => ({
  type: TIME_LIST_SET_SELECTED_TIME,
  payload: payload,
});

export const setTimeListData = payload => ({
  type: TIME_LIST_SET_DATA,
  payload: payload,
});

export const setDate = payload => ({
  type: BOOKING_DATE_SET_DATE,
  payload: payload,
});
