import {
  SERVICES_SELECT_SERVICE,
  SERVICES_DESELECT_SERVICE
} from '../../config/constants';

export const selectService = payload => ({
  type: SERVICES_SELECT_SERVICE,
  payload: payload,
});

export const deselectService = payload => ({
  type: SERVICES_DESELECT_SERVICE,
  payload: payload,
});
