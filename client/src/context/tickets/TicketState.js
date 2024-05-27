// src/context/tickets/TicketState.js

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
        status: "Open",
        lastModified: "2024-05-22T06:00:00.000Z"
      },
      {
        ticketID: "TCK-103",
        assetID: "MTR-003",
        issueDescription: "Motor is making strange noises.",
        dateRaised: "2023-07-10",
        status: "In Progress",
        lastModified: "2024-05-21T05:00:00.000Z"
      },
      {
        ticketID: "TCK-104",
        assetID: "MTR-004",
        issueDescription: "Agitator motor shaft is vibrating excessively.",
        dateRaised: "2023-09-05",
        status: "Resolved",
        lastModified: "2024-05-20T04:00:00.000Z"
      },
      {
        ticketID: "TCK-105",
        assetID: "MTR-005",
        issueDescription: "Cooling tower fan is not starting up.",
        dateRaised: "2023-06-30",
        status: "Open",
        lastModified: "2024-05-19T03:00:00.000Z"
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
