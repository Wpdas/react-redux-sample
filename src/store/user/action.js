export const UPDATE_FIRST_NAME = 'user:UpdateFirstName';
export const UPDATE_LAST_NAME = 'user:UpdateLastName';

export const onUpdateFirstName = (firstName) => {
  return {
    type: UPDATE_FIRST_NAME,
    payload: {
      firstName
    }
  }
}

export const onUpdateLastName = (lastName) => {
  return {
    type: UPDATE_LAST_NAME,
    payload: {
      lastName
    }
  }
}