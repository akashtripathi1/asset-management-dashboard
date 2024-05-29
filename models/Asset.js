const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  motorID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  location: String,
  manufacturer: String,
  modelNumber: String,
  serialNumber: String,
  installationDate: Date,
  lastMaintenanceDate: Date,
  status: { type: String, enum: ['Operational', 'Under Maintenance', 'Out of Service'], default: 'Operational' },
  specifications: {
    power: Number,
    voltage: Number,
    current: Number,
    speed: Number,
  },
  lastModified: Date,
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
