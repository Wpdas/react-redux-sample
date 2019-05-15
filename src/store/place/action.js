export const UPDATE_CITY = 'place:UpdateCity';
export const UPDATE_COUNTRY = 'place:UpdateCountry';

export const onUpdateCity = city => {
  return {
    type: UPDATE_CITY,
    payload: {
      city
    }
  }
}

export const onUpdateCountry = country => {
  return {
    type: UPDATE_COUNTRY,
    payload: {
      country
    }
  }
}

export const fetchInitialData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(onUpdateCity('Belo Horizonte'));
      dispatch(onUpdateCountry('Brazil'));
    }, 2000);
  }
}