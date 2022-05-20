function reducer(state = {}, action) {
  switch (action.type) {
    case "setProjectData":
      return {
        projectdata: action.payload.data,
      };
  }
}
