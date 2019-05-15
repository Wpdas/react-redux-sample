import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from './action';

const initialState = {
  firstName: '',
  lastName: ''
}

const updateFirstName = (state, payload) => {
  return {
    ...state,
    firstName: payload.firstName
  }
}

const updateLastName = (state, payload) => {
  return {
    ...state,
    lastName: payload.lastName
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case UPDATE_FIRST_NAME:
      return updateFirstName(state, payload);
    case UPDATE_LAST_NAME:
      return updateLastName(state, payload);
    default:
      return state;
  }
}

export default reducer;