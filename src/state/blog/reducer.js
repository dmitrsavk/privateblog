const submit = data => ({
  type: "blog/submit",
  payload: data
});

const deleteRecord = id => ({
  type: 'blog/deleteRecord',
  payload: { id }
});

const change = data => ({
  type: 'blog/change',
  payload: data
})

const blogReducer = (blog = { status: "initial", input: ''}, action) => {
  switch (action.type) {
    case "blog/submit":
      return { ...blog, status: "pending" };
    case "blog/submitSuccess":
      return { status: "success", input: '', data: action.payload };
    case "blog/change":
      return { ...blog, input: action.payload };
    default:
      return blog;
  }
};

export { submit, deleteRecord, blogReducer, change };
