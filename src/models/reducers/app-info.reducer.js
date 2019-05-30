import appInfoData from '../../tmp/app-info-mock-data';
import { APP_INFO_SET_APP_INFO } from '../../config/constants';

const appInfo = (state = {...appInfoData}, action) => {
  switch (action.type) {
    case APP_INFO_SET_APP_INFO:
      return {
        ...action.payload,
      }

    default:
      return state;
  }
};

export default appInfo;
