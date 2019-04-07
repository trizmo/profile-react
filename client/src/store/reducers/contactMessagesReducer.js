import { GET_CONTACTMESSAGES, ADD_CONTACTMESSAGE, DELETE_CONTACTMESSAGE, CONTACTMESSAGES_LOADING } from '../actions/types';

const initialState = {
  simpleAlerts: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_CONTACTMESSAGES:
      return {
        ...state,
        simpleAlerts: action.payload,
        loading: false
      }

    case DELETE_CONTACTMESSAGE:
      return {
        ...state,
        simpleAlerts: state.simpleAlerts.filter(alert => alert._id !== action.payload)
      }

    case ADD_CONTACTMESSAGE:
      return {
        ...state,
        simpleAlerts: [...state.simpleAlerts, action.payload]
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