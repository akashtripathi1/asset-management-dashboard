import { 
  LOAD_ASSETS,
  CREATE_ASSET,
  UPDATE_ASSET,
  DELETE_ASSET,
 } from '../types';

const assetReducer = (state, action) => {
  switch (action.type) {
    case LOAD_ASSETS:
      return {
        ...state
      };
      case CREATE_ASSET:
        return {
          ...state,
          assets: [...state.assets, action.payload]
        };
    default:
      return state;
  }
};

export default assetReducer;
