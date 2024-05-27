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
      },
      {
        motorID: "MTR-003",
        name: "Primary Conveyor Motor",
        description: "Motor for the primary conveyor belt.",
        location: "Factory Floor A - Section B",
        manufacturer: "PowerDrive Inc.",
        modelNumber: "PD-1234",
        serialNumber: "SN-987654321",
        installationDate: "2022-03-10",
        lastMaintenanceDate: "2023-06-25",
        status: "Operational",
        specifications: {
          power: 15,
          voltage: 480,
          current: 30,
          speed: 1800
        }
      },
      {
        motorID: "MTR-004",
        name: "Mixing Tank Agitator Motor",
        description: "Motor for mixing liquids in the tank.",
        location: "Production Area C - Tank 3",
        manufacturer: "FluidMasters Ltd.",
        modelNumber: "FM-7890",
        serialNumber: "SN-456789012",
        installationDate: "2022-05-15",
        lastMaintenanceDate: "2023-08-20",
        status: "Operational",
        specifications: {
          power: 7.5,
          voltage: 240,
          current: 20,
          speed: 1200
        }
      },
      {
        motorID: "MTR-005",
        name: "Cooling Tower Fan Motor",
        description: "Motor for cooling tower fan.",
        location: "Roof - Cooling Tower Unit 2",
        manufacturer: "CoolBreeze Motors",
        modelNumber: "CBM-1357",
        serialNumber: "SN-246801357",
        installationDate: "2022-02-28",
        lastMaintenanceDate: "2023-05-10",
        status: "Operational",
        specifications: {
          power: 25,
          voltage: 600,
          current: 40,
          speed: 900
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
  const updateAsset = asset => {
    dispatch({ type: UPDATE_ASSET, payload: asset });
  };

  // Delete Asset
  const deleteAsset = motorID => {
    dispatch({ type: DELETE_ASSET, payload: motorID });
  };

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
