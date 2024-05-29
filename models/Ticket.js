const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketID: { type: String, required: true, unique: true },
  assetID: { type: String, required: true },
  issueDescription: { type: String, required: true },
  dateRaised: { type: Date, default: Date.now },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  lastModified: Date,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
