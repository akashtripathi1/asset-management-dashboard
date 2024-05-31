const Ticket = require('../models/Ticket');

const getAllTickets = async (req, res) => {
    try {
        const ticket = await Ticket.find();
        res.json(ticket);
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
    }
}
const createTicket = async (req, res) => {
    const { ticketID } = req.body
    const ticketIDExists = await Ticket.findOne({ ticketID });
    if(ticketIDExists){
        return res.status(400).json({msg: 'Ticket ID Already Exists'})
    }

    const ticket = new Ticket(req.body);
    try {

        const newTicket = await ticket.save()
        res.status(201).json(newTicket);
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
    }
}
const updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new: true});        
        res.json(updatedTicket);
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
    }
}
const deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({msg: "Ticket Deleted"});
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
    }
}

module.exports = {
    getAllTickets,
    createTicket,
    updateTicket,
    deleteTicket
}