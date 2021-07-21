import styles from "./addTaskForm.module.css";
import { FaFacebook, FaGooglePlus, FaGithub } from "react-icons/fa";

export const AddTaskForm = (props) => {
  return (
    <form className={styles.addTaskForm}>
      <div className={styles.decoration}></div>
      <div className={styles.formHeader}>Add Task</div>

      <div className={styles.inputsContainer}>
        <div className={styles.inputsContainer_2}>
          <input className={styles.inputs} type="text" placeholder="Title" />

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Starts at</div>
            <input className={styles.inputs} type="time" />
          </div>
          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Ends at</div>
            <input className={styles.inputs} type="time" />
          </div>

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Date</div>
            <input className={styles.inputs} type="date" />
          </div>

          <div className={styles.timestampContainer}>
            <div className={styles.inputLabel}>Pick a color</div>
            <input className={styles.inputs} type="color" placeholder="Color" />
          </div>
        </div>

        <button type="submit" className={styles.addTaskButton}>
          Add Task
        </button>
      </div>
    </form>
  );
};
