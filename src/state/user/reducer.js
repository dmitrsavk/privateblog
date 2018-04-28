const getUserInfo = data => ({
  type: 'user/getUserInfo',
  payload: data
});

const userReducer = (user = { state: 'initial', data: {}}, action) => {
  switch (action.type) {
    case 'user/getUserInfo':
      return { state: 'pending' };
    case 'user/getUserInfoSuccess':
      return { state: 'success', data: user }
    default:
      return {};
  }
}

export { getUserInfo, userReducer }