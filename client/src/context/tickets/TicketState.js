// context/ticket/TicketState.js

import React, { useReducer } from 'react';
import TicketContext from './ticketContext';
import ticketReducer from './ticketReducer';
import { LOAD_TICKETS } from '../types';

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

  return (
    <TicketContext.Provider
      value={{
        tickets: state.tickets,
        loadTickets
      }}
    >
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketState;
