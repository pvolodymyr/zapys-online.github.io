import React from 'react';
import { connect } from 'react-redux';
import BusinessInfoCard from '../../modules/business-info-card/card';
import ActionPanel from '../../modules/action-panel/action-panel.module';
import EmployeeSection from '../../sections/employee/employee.section';
import ServicesSection from '../../sections/services/services.section';
import styles from './select_services_and_employees.module.scss';

const baseClassName = 'services-and-employees';

const ServicesAndEmployees = ({ appInfo, showActionPanel, state }) => {
  console.log(state);

  return (
    <div className={styles[baseClassName]}>
      <BusinessInfoCard />
      <EmployeeSection />
      <ServicesSection />
      {showActionPanel && <ActionPanel path="/select-date-time" />}
    </div>
  );
}

const mapStateToProps = state => ({
  state: state,
  appInfo: state.appInfo,
  showActionPanel: !!state.orderInfo.selectedServices.length,
});

export default connect(
  mapStateToProps,
  null,
)(ServicesAndEmployees);
