import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import moment from 'moment';
import { setSelectedTime } from "../../models/actions/time-list.actions";
import { deselectService } from "../../models/actions/services.actions";
import { getSelectedServicesFromState, getSelectedServicesTotalSum } from "../../helpers/services-helper";
import styles from './confirmation.module.scss';
import closeIcon from '../../assets/cancel-music.svg';
import user from '../../assets/user.svg';
import phone from '../../assets/phone.svg';
import ActionPanel from "../../modules/action-panel/action-panel.module";

const baseClassName = 'confirmation';

const Confirmation = props => {
  const { orderInfo, selectedServices, handleDeselect } = props;
  
  return (
    <div className={styles[baseClassName]}>
      <header className={styles[`${baseClassName}__header`]}>
        <Link to="/" className={styles[`${baseClassName}__header__link-back`]}>Hазад</Link>
        <h1 className={styles[`${baseClassName}__header__headline`]}>Підтвердження</h1>
      </header>
      <div className={styles[`${baseClassName}__order-table-wrap`]}>
        <table className={styles[`${baseClassName}__order-table`]}>
          <thead>
          <tr>
            <th>{orderInfo.selectedEmployee.name === "немає значення" ? "Тренер не вибраний" : orderInfo.selectedEmployee.name}</th>
            <th><Link to="/" >змінити</Link></th>
          </tr>
          </thead>
          <tbody>
          {
            selectedServices && selectedServices.map(({name, price, id}) => (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  {price}
                  <button onClick={() => handleDeselect(id)}><img src={closeIcon} /></button>
                </td>
              </tr>
            ))
          }
          </tbody>
          <tfoot>
            <tr>
              <td>Загальна сума</td>
              <td>
                {getSelectedServicesTotalSum(selectedServices)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className={styles[`${baseClassName}__order-info`]}>
        <h3 className={styles[`${baseClassName}__order-info__headline`]}>Вибраний час та дата</h3>
        <div className={styles[`${baseClassName}__order-info__footer`]}>
          <p className={styles[`${baseClassName}__order-info__footer__date`]}>
            {moment(orderInfo.selectedDate).format('DD.MM.YYYY')}
          </p>
          <p className={styles[`${baseClassName}__order-info__footer__time`]}>
            {moment(orderInfo.selectedDate).format('HH:mm')}
          </p>
        </div>
      </div>

      <p className={styles[`${baseClassName}__alarm`]}>Для того щоб підтвердити замовленя вам потрібно ввести вані номер телефону та імя</p>

      <div className={styles[`${baseClassName}__form`]}>
        <div className={styles[`${baseClassName}__form__item`]}>
          <input
            type="text"
            id="confirmPhoneNumber"
            placeholder="Введіть номер телефону"
            className={styles[`${baseClassName}__form__item__input`]}
          />
        </div>
        <div className={styles[`${baseClassName}__form__item`]}>
          <input
            type="text"
            id="confirmCustomerName"
            placeholder="Введіть своє імя"
            className={styles[`${baseClassName}__form__item__input`]}
          />
        </div>
      </div>
      <ActionPanel path="/select-date-time" />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(data => data),
  handleDeselect: data => dispatch(deselectService(data)),
})

const mapStateToProps = state => ({
  orderInfo: state.orderInfo,
  state: state,
  selectedServices: state.services &&
    state.services.list &&
    state.orderInfo &&
    state.orderInfo.selectedServices &&
    getSelectedServicesFromState(state.services.list, state.orderInfo.selectedServices),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);