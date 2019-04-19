import {
    FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE,
    POST_SMURF_SUCCESS, POST_SMURF, POST_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    postingSmurf: false,
    //    updatingSmurf: false,
    //    deletingSmurf: false,
    error: null
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_SMURFS:
            return {
                ...state,
                error: '',
                fetchingSmurfs: true
            }
        case POST_SMURF:
            return {
                ...state,
                postingSmurf: true
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                postingSmurf: false
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                postingSmurf: false
            }

        case FETCH_SMURFS_SUCCESS:

            console.log( action.payload );

            return {
                ...state,
                error: null,
                fetchingSmurfs: false,
                smurfs: [...action.payload]
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                error: 'Error: failure to fetch from API',
                fetchingSmurfs: false
            }
        default:
            return state
    }
}

export default reducer