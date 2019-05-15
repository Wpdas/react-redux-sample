import { UPDATE_CITY, UPDATE_COUNTRY } from './action';

const initialState = {
  city: '',
  country: ''
}

const updateCity = (state, payload) => {
  return {
    ...state,
    city: payload.city
  }
}

const updateCountry = (state, payload) => {
  return {
    ...state,
    country: payload.country
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case UPDATE_CITY:
      return updateCity(state, payload);
    case UPDATE_COUNTRY:
      return updateCountry(state, payload);
    default:
      return state;
  }
}

export default reducer;