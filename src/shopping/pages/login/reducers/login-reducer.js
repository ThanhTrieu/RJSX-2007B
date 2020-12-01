import * as types from '../actions/types';

const initState = {
  loading: null,
  cancelled: null,
  info: null,
  error: null
}
export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return {...state,loading: action.loading }
    case types.LOGIN_CANCELLED:
      return { ...state, cancelled: action.cancel}
    case types.LOGIN_ERROR:
      return {
        ...state,
        info: null,
        cancelled: null,
        error: action.error
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        cancelled: null,
        info: action.data
      }
    default:
      return state;
  }
}