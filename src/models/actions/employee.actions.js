import {
  EMPLOYEE_SELECT_EMPLOYEE,
} from '../../config/constants';

export const selectEmployee = payload => ({
  type: EMPLOYEE_SELECT_EMPLOYEE,
  payload: payload,
});

