import { combineReducers } from 'redux';
import services from './services.reducer';
import employee from './employee.reducer';
import appInfo from './app-info.reducer';
import timeList from './time-list.reducer';
import orderInfo from './order-info.reducer';

const rootReducer = combineReducers({
  services,
  employee,
  appInfo,
  timeList,
  orderInfo,
});

export default rootReducer;
