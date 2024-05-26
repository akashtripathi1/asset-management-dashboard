// context/asset/AssetState.js

import React, { useReducer } from 'react';
import AssetContext from './assetContext';
import assetReducer from './assetReducer';
import { 
  LOAD_ASSETS,
  CREATE_ASSET,
  UPDATE_ASSET,
  DELETE_ASSET,
 } from '../types';

const AssetState = props => {
  const initialState = {
    assets: [
      {
        motorID: "MTR-002",
        name: "Secondary Conveyor Motor",
        description: "Motor for the secondary conveyor belt.",
        location: "Factory Floor B - Section C",
        manufacturer: "ACME Motors",
        modelNumber: "ACM5678",
        serialNumber: "SN-123456789",
        installationDate: "2022-01-20",
        lastMaintenanceDate: "2023-04-15",
        status: "Operational",
        specifications: {
          power: 10,
          voltage: 380,
          current: 25,
          speed: 1400
        }
      }
    ]
  };

  const [state, dispatch] = useReducer(assetReducer, initialState);

  // Load Assets
  const loadAssets = () => {
    dispatch({ type: LOAD_ASSETS });
  };

  // Create Asset
  const createAsset = asset => {
    dispatch({ type: CREATE_ASSET, payload: asset });
  };

  // Update Asset
  const updateAsset = () => {};
  // Delete Asset
  const deleteAsset = () => {};

  return (
    <AssetContext.Provider
      value={{
        assets: state.assets,
        loadAssets,
        createAsset,
        updateAsset,
        deleteAsset
      }}
    >
      {props.children}
    </AssetContext.Provider>
  );
};

export default AssetState;
