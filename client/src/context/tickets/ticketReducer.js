import { LOAD_TICKETS } from '../types';

const ticketReducer = (state, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default ticketReducer;
