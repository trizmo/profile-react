import { GET_CONTACTMESSAGES, ADD_CONTACTMESSAGE, DELETE_CONTACTMESSAGE, CONTACTMESSAGES_LOADING } from '../actions/types';

const initialState = {
  messages: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_CONTACTMESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false
      }

    case DELETE_CONTACTMESSAGE:
      return {
        ...state,
        messages: state.messages.filter(msg => msg._id !== action.payload)
      }

    case ADD_CONTACTMESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }

    case CONTACTMESSAGES_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}