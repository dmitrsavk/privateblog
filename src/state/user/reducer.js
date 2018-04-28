const getUserInfo = data => ({
  type: 'user/getUserInfo',
  payload: data
});

const userReducer = (user = { state: 'initial', data: {} }, action) => {
  switch (action.type) {
    case 'user/getUserInfo':
      return {...user, state: 'pending'};
    case 'user/getUserInfoSuccess':
      return { state: 'success', data: action.data }
    default:
      return user;
  }
}

export { getUserInfo, userReducer }