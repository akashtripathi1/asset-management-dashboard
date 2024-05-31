import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
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
    assets: []
  };

  const [state, dispatch] = useReducer(assetReducer, initialState);

  // axios.defaults.baseURL = 'http://localhost:5000';

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://localhost:5000';
} else {
    axios.defaults.baseURL = 'http://localhost:5000';
}

  useEffect(() => {
    loadAssets();
  }, []);

  // Load Assets
  const loadAssets = async () => {
    try {
      const res = await axios.get('/api/assets');
      dispatch({ type: LOAD_ASSETS, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Create Asset
  const createAsset = async asset => {
    try {
      asset.lastModified = new Date().toISOString();
      const res = await axios.post('/api/assets', asset);
      dispatch({ type: CREATE_ASSET, payload: res.data });
      return { success: true, data: res.data };
    } catch (err) {
      return { success: false, error: err.response ? err.response.data : 'Server Error' };
    }
  };

  // Update Asset
  const updateAsset = async asset => {
    try {
      asset.lastModified = new Date().toISOString();
      const res = await axios.put(`/api/assets/${asset._id}`, asset);
      dispatch({ type: UPDATE_ASSET, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Asset
  const deleteAsset = async asset => {
    try {
      await axios.delete(`/api/assets/${asset._id}`);
      dispatch({ type: DELETE_ASSET, payload: asset._id });
    } catch (err) {
      console.error(err);
    }
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
