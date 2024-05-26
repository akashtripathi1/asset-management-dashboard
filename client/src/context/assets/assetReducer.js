import { LOAD_ASSETS } from '../types';

const assetReducer = (state, action) => {
  switch (action.type) {
    case LOAD_ASSETS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default assetReducer;
