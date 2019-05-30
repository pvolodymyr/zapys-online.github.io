import React from 'react';
import { connect } from "react-redux";
import styles from './employee-section.module.scss';
import EmployeeList from '../../modules/employee-list/employee-list.module';
import { selectEmployee } from '../../models/actions/employee.actions';

const baseClassName = 'employee-section';

const EmployeeListSection = ({employeeList, selectedEmployeeId, handleSelect, name}) => (
  <>
    <h3 className={styles[`${baseClassName}__headline`]}>Вибраний працівник: {name}</h3>
    <EmployeeList
      employeeList={employeeList}
      selectedEmployeeId={selectedEmployeeId}
      handleSelect={handleSelect}
    />
  </>
);

const mapStateToProps = state => ({
  employeeList: state.employee.list,
  selectedEmployeeId: state.orderInfo.selectedEmployee.id,
  name: state.orderInfo.selectedEmployee.name,
});

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(selectEmployee(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListSection);