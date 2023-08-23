import { ThoughtsContext } from "../Context/ThoughtsContext";

import { useContext } from "react";

export const useThoughtsContext = () => {
  const context = useContext(ThoughtsContext);
  if (!context) {
    throw Error(
      "useThoughtsContext must be used inside ThoughtsContextProvider"
    );
  }

  return context;
};
