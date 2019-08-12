import axios from 'axios';
import { GET_JOBDETAILS, ADD_JOBDETAIL, DELETE_JOBDETAIL, JOBDETAILS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const getJobDetails = () => (dispatch, getState) => {
  dispatch(setJobDetailsLoading());
  console.log("action working")
  axios
    .get('/api/jobdetail', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_JOBDETAILS,
        payload: res.data,
      })
    )
    // .then(res => console.log(res))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  
}


export const deleteJobDetail = id => (dispatch, getState) => {
  axios
    .delete(`/api/jobdetail/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_JOBDETAIL,
        payload: id
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))


}

export const addJobDetail = newJobDetail => (dispatch, getState) => {
  axios
    .post('/api/jobdetail', newJobDetail, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_JOBDETAIL,
        payload: res.data
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const setJobDetailsLoading = () => {
  return {
    type: JOBDETAILS_LOADING
  }
}
