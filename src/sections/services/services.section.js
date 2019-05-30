import React from 'react';
import styles from "./services-section.module.scss";
import ServiceCard from "../../modules/service-card/card";
import { deselectService, selectService } from "../../models/actions/services.actions";
import { connect } from "react-redux";

const baseClassName = 'services-section';

const ServicesSection = ({servicesList, handleSelect, handleDeselect}) => (
  <section className={styles[baseClassName]}>
    <h3 className={styles[`${baseClassName}__headline`]}>Виберіть послуги:</h3>
    <div className={styles[`${baseClassName}__list`]}>
      {
        servicesList.map(data => (
          <ServiceCard
            {...data}
            key={data.id}
            id={data.id}
            handleSelect={handleSelect}
            handleDeselect={handleDeselect}
          />
        ))
      }
    </div>
  </section>
);

const mapStateToProps = state => ({
  servicesList: state.services.list,
});

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(selectService(data)),
  handleDeselect: data => dispatch(deselectService(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicesSection);
