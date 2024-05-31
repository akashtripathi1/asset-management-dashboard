// src/context/tickets/TicketState.js

import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import TicketContext from './ticketContext';
import ticketReducer from './ticketReducer';
import { 
  LOAD_TICKETS,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET
 } from '../types';

const TicketState = props => {
  const initialState = {
    tickets: []
  };

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://localhost:5000';
} else {
    axios.defaults.baseURL = 'http://localhost:5000';
}

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  useEffect(() => {
    loadTickets();
  }, []);

  // Load Tickets
  const loadTickets = async () => {
    try {
      const res = await axios.get('/api/tickets');
      dispatch({type: LOAD_TICKETS, payload: res.data});
    } catch (error) {
      console.error(error) ;     
    }
  };

  // Create Ticket
  const createTicket = async ticket => {
    try {
      ticket.dateRaised = new Date().toISOString();
      ticket.lastModified = new Date().toISOString();
      const res = await axios.post('/api/tickets', ticket);
      dispatch({ type: CREATE_TICKET, payload: res.data });
      return { success: true, data: res.data };
      
    } catch (err) {
      return { success: false, error: err.response ? err.response.data : 'Server Error' };
    }
  };

  // Update Ticket
  const updateTicket = async ticket => {
    try {
      ticket.lastModified = new Date().toISOString();
      const res = await axios.put(`/api/tickets/${ticket._id}`, ticket);
      dispatch({ type: UPDATE_TICKET, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Ticket
  const deleteTicket = async ticket => {
    try {
      await axios.delete(`/api/tickets/${ticket._id}`);
      dispatch({ type: DELETE_TICKET, payload: ticket._id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets: state.tickets,
        loadTickets,
        createTicket,
        updateTicket,
        deleteTicket
      }}
    >
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketState;
