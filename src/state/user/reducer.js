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
      return { status: "logout", data: {} };
    case "user/logoutSuccess":
      window.location.reload();
      return { status: "initial", data: {} };
    case "blog/submitSuccess":
      if (!user.data.records) {
        user.data.records = [];
      }
      user.data.records.unshift(action.payload);
      return { ...user, data: {...user.data, records: user.data.records.slice()}};
    case "blog/recordDeleteSuccess":
      return { ...user, data: {...user.data, records: action.payload}}
    default:
      return user;
  }
};

export { getUserInfo, userReducer };
