import React from 'react';
import styles from './card.module.scss';
import {connect} from "react-redux";

const baseClassName = 'business-info-card';

const Card = ({ appInfo : { img, name, location } }) => (
  <div className={styles[baseClassName]}>
    <img
      src={img}
      alt={name}
      className={styles[`${baseClassName}__image`]}
    />
    <div className={styles[`${baseClassName}__info-block`]}>
      <h1 className={styles[`${baseClassName}__info-block__headline`]}>{name}</h1>
      <p className={styles[`${baseClassName}__info-block__location`]}>{location}</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  appInfo: state.appInfo,
});

export default connect(
  mapStateToProps,
  null,
)(Card);