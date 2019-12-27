import { MAIL_SENT } from '../../actions/types';


const initialState = {
  mail_sent: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case MAIL_SENT:
      // console.log("get reducer working")
      return {
        ...state,
        mail_sent: true
      }

    default:
      return state;
  }
}