import { GET_JOBDETAILS, ADD_JOBDETAIL, DELETE_JOBDETAIL, JOBDETAILS_LOADING } from '../actions/types';

const initialState = {
  jobDetails: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_JOBDETAILS:
      // console.log("get reducer working")
      return {
        ...state,
        jobDetails: action.payload,
        loading: false
      }

    case DELETE_JOBDETAIL:
      return {
        ...state,
        jobDetails: state.jobDetails.filter(msg => msg._id !== action.payload)
      }

    case ADD_JOBDETAIL:
      return {
        ...state,
        jobDetails: [...state.jobDetails, action.payload]
      }

    case JOBDETAILS_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}