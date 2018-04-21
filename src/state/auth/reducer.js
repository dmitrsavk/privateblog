const login = data => ({
  type: 'auth/login',
  payload: data
});

const authReducer = (auth = { state: 'initial'}, action) => {
  switch (action.type) {
    case 'auth/login':
      return { state: 'pending' };
    default:
      return auth;
  }
}

export { login, authReducer }