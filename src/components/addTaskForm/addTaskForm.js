import styles from "./addTaskForm.module.css";
import { FaFacebook, FaGooglePlus, FaGithub } from "react-icons/fa";

export const AddTaskForm = (props) => {
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
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="Starts at"
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="Ends at"
          />
          <input
            className={styles.inputs}
            type="date"
          />
          <input
            className={styles.inputs}
            type="color"
            placeholder="Color"
          />

          
        </div>

        <button type="submit" className={styles.addTaskButton}>
          Add Task
        </button>
        
      </div>
    </form>
  );
};
