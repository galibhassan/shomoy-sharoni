import React, { useState } from "react";

const DEFAULT_SELECTED_TASK = {
  title: "Walking in the park",
  date: { year: 2021, month: 2, day: 4 },
  startingTime: "10:18",
  endingTime: "11:16",
  color: "#FF4350",
  status: "InProgress",
};

export const SelectedTaskContext = React.createContext({
  selectedTask: DEFAULT_SELECTED_TASK,
  setSelectedTask: (changedTask) => {},
});

export const SelectedTaskContextProvider = (props) => {
  const [selectedTask, setSelectedTask] = useState(DEFAULT_SELECTED_TASK);

  return (
    <SelectedTaskContext.Provider
      value={{
        selectedTask: selectedTask,
        setSelectedTask: setSelectedTask,
      }}
    >
      {props.children}
    </SelectedTaskContext.Provider>
  );
};
