const getUserInfo = data => ({
  type: "user/getUserInfo",
  payload: data
});

export const logout = data => ({
  type: "user/logout",
  payload: data
});

const userReducer = (user = { state: "initial", data: {} }, action) => {
  switch (action.type) {
    case "user/getUserInfo":
      return { ...user, state: "pending" };
    case "user/getUserInfoSuccess":
      return { state: "success", data: action.data };
    case "user/logout":
      return { state: "initial", data: {} };
    default:
      return user;
  }
};

export { getUserInfo, userReducer };
