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
        ...state,
        assets: action.payload
      };
      case CREATE_ASSET:
        return {
          ...state,
          assets: [...state.assets, action.payload]
        };
        case UPDATE_ASSET:
          return {
            ...state,
            assets: state.assets.map(asset =>
              asset.motorID === action.payload.motorID ? action.payload : asset
            )
          };
        case DELETE_ASSET:
          return {
            ...state,
            assets: state.assets.filter(asset => asset._id !== action.payload)
          };
    default:
      return state;
  }
};

export default assetReducer;
