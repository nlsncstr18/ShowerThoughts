import { createContext, useReducer } from "react";

export const ThoughtsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blogs: action.payload,
      };
    case "CREATE_BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter((b) => b._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ThoughtsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: null });
  return (
    <ThoughtsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThoughtsContext.Provider>
  );
};
