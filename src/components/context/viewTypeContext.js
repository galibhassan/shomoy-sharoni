import React, { useState } from "react";

export const ViewTypeContext = React.createContext({
  viewType: "",
  setViewType: (changedViewType) => {},
});

export const ViewTypeContextProvider = (props) => {
  const [viewType, setViewType] = useState("week");

  return (
    <ViewTypeContext.Provider value={{ viewType, setViewType }}>
      {props.children}
    </ViewTypeContext.Provider>
  );
};
