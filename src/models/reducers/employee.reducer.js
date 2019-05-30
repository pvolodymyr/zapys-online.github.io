import { EMPLOYEE_SELECT_EMPLOYEE } from '../../config/constants';
import employeeList from '../../tmp/employee-mock-data';

const employee = (state = {
  list: employeeList,
}, { type, payload }) => state;

export default employee;

// TODO: clear selected services once selected employee was changed!1!!
