function reducer(state = {}, action) {
  switch (action.type) {
    case "setprojectdata":
      return {
        projectdata: action.payload.data,
      };
  }
}
