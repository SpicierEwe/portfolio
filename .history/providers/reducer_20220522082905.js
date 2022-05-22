export default function reducer(state = {}, action) {
  switch (action.type) {
    case "setProjectData":
      return {
        projectData: action.payload.data,
      };
  }
}

export function themeReducer(state = {}, action) {
  switch (action.type) {
    case "setProjectData":
      return {
        projectData: action.payload.data,
      };
  }
}
