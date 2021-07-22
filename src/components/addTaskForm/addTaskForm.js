import styles from "./addTaskForm.module.css";
import { useState, useEffect } from "react";

export const AddTaskForm = (props) => {
  const [taskData, setTaskData] = useState({});
  useEffect(() => {
    console.log(taskData);
  }, [taskData]);

  const handleInputs = (event) => {
    const inputKey = event.target.name;
    setTaskData((prevTaskData) => {
      return {
        ...taskData,
        [inputKey]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Here, post request should be sent
    
  };

  return (
    <form className={styles.addTaskForm}>
      <div className={styles.decoration}></div>
      <div className={styles.formHeader}>Add Task</div>

      <div className={styles.inputsContainer}>
        <div className={styles.inputsContainer_2}>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleInputs}
          />

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Starts at</div>
            <input
              className={styles.inputs}
              type="time"
              name="startsAt"
              onChange={handleInputs}
            />
          </div>
          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Ends at</div>
            <input
              className={styles.inputs}
              type="time"
              name="endsAt"
              onChange={handleInputs}
            />
          </div>

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Date</div>
            <input
              className={styles.inputs}
              type="date"
              name="date"
              onChange={handleInputs}
            />
          </div>

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Pick a color</div>
            <input
              className={styles.inputs}
              type="color"
              placeholder="Color"
              name="color"
              onChange={handleInputs}
            />
          </div>
        </div>

        <button
          type="submit"
          className={styles.addTaskButton}
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};
