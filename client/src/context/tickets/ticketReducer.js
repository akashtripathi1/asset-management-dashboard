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
        ...state,
        tickets: action.payload
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
              ticket.ticketID === action.payload.ticketID ? action.payload : ticket
            )
          };
        case DELETE_TICKET:
          return {
            ...state,
            tickets: state.tickets.filter(ticket => ticket._id !== action.payload)
          };
    default:
      return state;
  }
};

export default ticketReducer;
