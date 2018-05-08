const submit = data => ({
  type: "blog/submit",
  payload: data
});


const blogReducer = (blog = { status: "initial", input: ''}, action) => {
  switch (action.type) {
    case "blog/submit":
      return { ...blog, status: "pending" };
    case "blog/submitSuccess":
      return { status: "success", data: action.data };
    default:
      return blog;
  }
};

export { submit, blogReducer };
