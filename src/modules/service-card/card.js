import React, { Component } from 'react';
import styles from './card.module.scss';
import classnames from 'classnames';

const baseClassName = 'service-card';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id) {
    if (!this.state.selected) {
       this.props.handleSelect(id);
    } else {
      this.props.handleDeselect(id);
    }

    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { name, price, id } = this.props;

    const className = classnames(
      styles[baseClassName],
      {[styles[`${baseClassName}--selected`]]: this.state.selected},
    );

    return (
      <div className={className} onClick={() => this.handleSelect(id)}>
        <h3 className={styles[`${baseClassName}__headline`]}>{name}</h3>
        <div className={styles[`${baseClassName}__footer`]}>
          <span className={styles[`${baseClassName}__footer__key`]}>вартість:</span>
          <span className={styles[`${baseClassName}__footer__value`]}>{price}</span>
        </div>
      </div>
    )
  }
};

export default Card;