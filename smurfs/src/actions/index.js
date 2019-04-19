import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const POST_SMURF = 'POST_SMURF'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'


export const getSmurfs = () => dispatch => {

    dispatch({type: FETCH_SMURFS})

    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({
            type: FETCH_SMURFS_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_SMURFS_FAILURE,
            payload: err
        }))
}

export const addSmurf = smurf => dispatch => {
    dispatch({type: POST_SMURF})

    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => dispatch({
            type: POST_SMURF_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: POST_SMURF_FAILURE,
            payload: err
        }))
}