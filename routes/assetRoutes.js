const express = require('express');
const {
    getAllAssets,
    createAsset,
    updateAsset,
    deleteAsset
} = require('../controllers/assetController');

const router = express.Router();

router.get('/', getAllAssets);
router.post('/', createAsset);
router.put('/:id', updateAsset);
router.delete('/:id', deleteAsset);

module.exports = router;