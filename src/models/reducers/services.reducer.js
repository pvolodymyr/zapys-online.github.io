import {
  SERVICES_SELECT_SERVICE,
  SERVICES_DESELECT_SERVICE,
} from '../../config/constants';
import servicesList from '../../tmp/service-mock-data';

const services = (state = {
  selectedServices: [],
  list: servicesList,
}, action) => state;

export default services;
