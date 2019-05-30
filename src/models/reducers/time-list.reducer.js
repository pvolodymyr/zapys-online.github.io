import { TIME_LIST_SET_DATA, TIME_LIST_SET_SELECTED_TIME } from '../../config/constants';
import timeList from '../../tmp/time-list-mock-data';

export default (state = { timeList: timeList }, {type, payload}) => {
  switch (type) {
    case TIME_LIST_SET_DATA:
      return {
        ...state,
        timeList: payload,
      };

    default:
      return state;
  }
};
