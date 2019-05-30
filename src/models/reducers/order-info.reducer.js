import {
  BOOKING_DATE_SET_DATE,
  EMPLOYEE_SELECT_EMPLOYEE, SERVICES_DESELECT_SERVICE,
  SERVICES_SELECT_SERVICE,
  TIME_LIST_SET_SELECTED_TIME
} from '../../config/constants';

const orderInfo = (state = {
  selectedDate: 'Thu May 30 2019 12:00:00 GMT+0300 (Eastern European Summer Time)',
  selectedTime: {
    checked: true,
    value: "10:00 AM"
  },
  selectedEmployee: {
    id: "default",
    name: "немає значення",
  },
  selectedServices: [
    "hjkdf23234hjkdfjh233344jhh1",
    "hjkdf23234hjkdfjh233344jhh2",
  ],
}, { type, payload }) => {
  switch (type) {
    case BOOKING_DATE_SET_DATE:
      return {
        ...state,
        selectedDate : payload,
      }

    case EMPLOYEE_SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: {
          id: payload.id,
          name: payload.id === 'default' ? 'немає значення' : payload.name,
        }
      }

    case TIME_LIST_SET_SELECTED_TIME:
      return {
        ...state,
        selectedTime: payload,
      };

    case SERVICES_SELECT_SERVICE:
      console.log(state);
      return {
        ...state,
        selectedServices: [
          ...state.selectedServices,
          payload
        ]
      }

    case SERVICES_DESELECT_SERVICE:
      let index = state.selectedServices.indexOf(payload);
      return {
        ...state,
        selectedServices: [
          ...state.selectedServices.slice(0, index),
          ...state.selectedServices.slice(++index),
        ]
      };

    default:
      return state;
  }
};

export default orderInfo;
