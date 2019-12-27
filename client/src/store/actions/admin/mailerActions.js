import axios from 'axios';
import { MAIL_SENT } from '../types';
import { tokenConfig } from '../authActions';
import { returnErrors } from '../errorActions'

// EMAIL INVOICE TO CUSTOMER
export const sendInvoice = (invoice) => (dispatch, getState) => {
  // dispatch(setJobDetailsLoading());
  // console.log("action working")
  axios
    .post('/api/admin/invoice', invoice, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: MAIL_SENT,
        payload: res.data,
      })
    )
    // .then(res => console.log(res))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}