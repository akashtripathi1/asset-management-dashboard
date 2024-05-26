import { 
  LOAD_TICKETS,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET
 } from '../types';

const ticketReducer = (state, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return {
        ...state
      };
      case CREATE_TICKET:
        return {
          ...state,
          tickets: [...state.tickets, action.payload]
        };
        case UPDATE_TICKET:
          return {
            ...state,
            tickets: state.tickets.map(ticket =>
              ticket.motorID === action.payload.motorID ? action.payload : ticket
            )
          };
        case DELETE_TICKET:
          return {
            ...state,
            tickets: state.tickets.filter(ticket => ticket.ticketID !== action.payload)
          };
    default:
      return state;
  }
};

export default ticketReducer;
