import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './addTaskButton.module.css'


export const AddTaskButton = (props) => {
  return(
    <button className={styles.button}>
      <FontAwesomeIcon icon={faPlus} size="2x"/>
     </button>
  )
}