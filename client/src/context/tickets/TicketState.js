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

  axios.defaults.baseURL = 'http://localhost:5000';


  const [state, dispatch] = useReducer(ticketReducer, initialState);
  useEffect(() => {
    loadTickets();
  }, []);

  // Load Tickets
  const loadTickets = () => {
    dispatch({ type: LOAD_TICKETS });
  };

  // Create Ticket
  const createTicket = ticket => {
    ticket.lastModified = new Date().toISOString();
    dispatch({ type: CREATE_TICKET, payload: ticket });
  };

  // Update Ticket
  const updateTicket = ticket => {
    ticket.lastModified = new Date().toISOString();
    dispatch({ type: UPDATE_TICKET, payload: ticket });
  };

  // Delete Ticket
  const deleteTicket = ticketID => {
    dispatch({ type: DELETE_TICKET, payload: ticketID });
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
