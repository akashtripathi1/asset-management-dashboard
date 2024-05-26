const express = require('express');
const {
  getAllTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');

const router = express.Router();

router.get('/', getAllTickets);
router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

module.exports = router;
