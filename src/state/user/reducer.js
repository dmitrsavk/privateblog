const getUserInfo = data => ({
  type: "user/getUserInfo",
  payload: data
});

export const logout = data => ({
  type: "user/logout",
  payload: data
});

const userReducer = (user = { status: "initial", data: {} }, action) => {
  switch (action.type) {
    case "user/getUserInfo":
      return { ...user, status: "pending" };
    case "user/getUserInfoSuccess":
      return { status: "success", data: action.data };
    case "user/logout":
      return { status: "initial", data: {} };
    default:
      return user;
  }
};

export { getUserInfo, userReducer };
