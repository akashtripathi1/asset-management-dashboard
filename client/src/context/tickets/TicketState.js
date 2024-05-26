// context/ticket/TicketState.js

import React, { useReducer } from 'react';
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
    tickets: [
      {
        ticketID: "TCK-102",
        assetID: "MTR-002",
        issueDescription: "Motor is overheating.",
        dateRaised: "2023-05-22",
        status: "Open"
      }
    ]
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  // Load Tickets
  const loadTickets = () => {
    dispatch({ type: LOAD_TICKETS });
  };

    // Create Ticket
    const createTicket = ticket => {
      dispatch({ type: CREATE_TICKET, payload: ticket });
    };
  
    // Update Ticket
    const updateTicket = ticket => {
      dispatch({ type: UPDATE_TICKET, payload: ticket });
    };
  
    // Delete Ticket
    const deleteTicket = motorID => {
      dispatch({ type: DELETE_TICKET, payload: motorID });
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
