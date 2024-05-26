const Asset = require('../models/Asset');

const getAllAssets = async (req, res) =>{
    try {
        const assets = await Asset.find();
        res.json(assets);
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"});   
    }
}


const createAsset = async (req, res) =>{
    const asset = new Asset(req.body);
    try {
        const newAsset = await asset.save();
        res.status(201).json(newAsset);        
    } catch (error) {
        res.status(500).json({msg: "Server Error"});
        
    }

}
const updateAsset = async (req, res) =>{
    try {
        const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.json(updatedAsset);
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"});
    }

}
const deleteAsset = async (req, res) => {
    try {
        await Asset.findByIdAndDelete(req.params.id);
        res.json({msg: "Asset Deleted "});
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
        
    }
}

module.exports = {
    getAllAssets,
    createAsset,
    updateAsset,
    deleteAsset
}